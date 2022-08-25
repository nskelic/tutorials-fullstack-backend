import SubCategory from "../models/subcategory.model"
import Item from "../models/item.model";
import mongoose from "mongoose";

async function validateSubCategory (subCategoryId) {
    //checks
    const subCategory = await SubCategory.findOne({_id: mongoose.Types.ObjectId(subCategoryId)})
    //validations
    if(!subCategory) throw new Error(`SubCategory does not exists with the id ${subCategoryId}`)
    return subCategory._id
}

async function validateItemName (name) {
    if(name === '') throw new Error(`Name of the item can not be ${data.name}`);
    const item = await Item.findOne({name});
    if(item) throw new Error(`Name ${data.name} already exists`);
    return;
}

const itemValidation = {
    validateSubCategory,
    validateItemName
}

export default itemValidation;