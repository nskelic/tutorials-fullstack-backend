import Category from "../models/category.model";
import mongoose from "mongoose";

const getOneCategory = async(id) => {
    return await Category.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
};
const getAllCategories = async() => {
    return await Category.find({});
};
const createOneCategory = async(data) => {
    // checks and validation
    // npr ako pravimo subcategory treba provj da li mu je stvarno ona kategorija koja pise
    // throw new Error("neodgovarajuca kategorija");
    return await Category.create({ // pravi category po modelu
        ...data // inace se za duboku kopiju koristi cloneDeep() metoda iz Lodash biblioteke
    })
};
const deleteOneCategory = async(id) => {
    return await Category.deleteOne({
        _id: mongoose.Types.ObjectId(id) 
    })
};
const updateOneCategory = async(id, data) => {
    return await Category.updateOne({
        _id: mongoose.Types.ObjectId(id) 
    }, {
        /*$set: { // sta ce mi ovo??
            ...data
        }*/
        ...data
    }, {
        upsert: true // Ako ne postoji kategorija sa ovim id napravi novu kategoriju od date (nece imati spomenuti id)
    })
};

const categoryServiceHandler = {
    getOneCategory,
    getAllCategories,
    createOneCategory,
    deleteOneCategory,
    updateOneCategory,
}

export default categoryServiceHandler;