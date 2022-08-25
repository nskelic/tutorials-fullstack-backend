import mongoose from "mongoose";
import Item from "../models/item.model";
import validateCategory from "../validation/subcategoryValidation";
import itemValidation from "../validation/itemValidation";

const getOneItem = async(id) => {
    return await Item.findOne({
        _id: mongoose.Types.ObjectId(id) 
    })
};
const getAllItems = async() => {
    return await Item.find({});
};

const deleteOneItem = async(id) => {
    return await Item.deleteOne({
        _id: mongoose.Types.ObjectId(id) 
    })
};

const getItemsByCategory = async(id) => {
    return await Item.find({
        categoryId: mongoose.Types.ObjectId(id) 
    })
};

const getItemsBySubCategory = async(id) => {
    return await Item.find({
        subCategoryId: mongoose.Types.ObjectId(id) 
    })
};

const createOneItem = async(data) => {
    const cid = await validateCategory(data.categoryId);
    const sid = await itemValidation.validateSubCategory(data.subCategoryId);
    await itemValidation.validateItemName(data.name);
    if(data.price < 0) throw new Error(`Price can not be below 0`);
    if(data.quantity < 0) throw new Error(`Quantity can not be below 0`);
    return await Item.create({
        ...data,
        categoryId: cid,
        subCategoryId: sid
    })
};

const updateOneItem = async(id, data) => {
        const {categoryId, subCategoryId, ...restOfData} = data;
        let update = restOfData;
        if(categoryId) {
            const cid = await validateCategory(data.categoryId);
            update.categoryId = cid;
        }
        if(subCategoryId) {
            const sid = await validateSubCategory(data.subCategoryId);
            update.subCategoryId = sid;
        }
        return await Item.updateOne({
            _id: mongoose.Types.ObjectId(id) 
        }, {
            $set: {
                ...update
            }
        }, {
            upsert: true 
        })
    };

const ItemServiceHandler = {
    getOneItem,
    getAllItems,
    getItemsByCategory,
    getItemsBySubCategory,
    createOneItem,
    deleteOneItem,
    updateOneItem,
}

export default ItemServiceHandler;