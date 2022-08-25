import Category from "../models/category.model"
import mongoose from "mongoose";

async function validateCategory (categoryId) {
    //checks
    const category = await Category.findOne({_id: mongoose.Types.ObjectId(categoryId)})
    //validations
    if(!category) throw new Error(`Category does not exists with the id ${categoryId}`)
    return category._id
}

export default validateCategory