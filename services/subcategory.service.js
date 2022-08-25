import mongoose from "mongoose";
import SubCategory from "../models/subCategory.model";
import validateCategory from "../validation/subcategoryValidation";

const getOneSubCategory = async(id) => {
    return await SubCategory.findOne({
        _id: mongoose.Types.ObjectId(id) 
    })
};
const getAllSubCategories = async() => {
    return await SubCategory.find({});
};

const deleteOneSubCategory = async(id) => {
    return await SubCategory.deleteOne({
        _id: mongoose.Types.ObjectId(id) 
    })
};

const getSubCategoriesByCategory = async(id) => {
    return await SubCategory.find({
        categoryId: mongoose.Types.ObjectId(id) 
    })
};

const createOneSubCategory = async(data) => {
    const id = await validateCategory(data.categoryId);
    return await SubCategory.create({
        ...data,
        categoryId: id
    })
};

const updateOneSubCategory = async(id, data) => {
        const {categoryId, ...restOfData} = data;
        if(categoryId) {
            await validateCategory(data.categoryId)
        }

        const update = categoryId ? data : restOfData; // Ako je poslan categoryId update-at cemo sve, inace sve osim id-a

        return await SubCategory.updateOne({
            _id: mongoose.Types.ObjectId(id) 
        }, {
            $set: {
                ...update
            }
        }, {
            upsert: true 
        })
    };

const SubCategoryServiceHandler = {
    getOneSubCategory,
    getAllSubCategories,
    getSubCategoriesByCategory,
    createOneSubCategory,
    deleteOneSubCategory,
    updateOneSubCategory,
}

export default SubCategoryServiceHandler;