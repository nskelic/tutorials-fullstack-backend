import Category from "../models/category.model";
import mongoose from "mongoose";

const getOneCategory = () => {};
const getAllCategories = () => {};
const createOneCategory = async(data) => { // mora biti asinhrona funk jer se treba cekat na bazu
    // checks and validation
    // npr ako pravimo subcategory treba provj da li mu je stvarno ona kategorija koja pise
    // throw new Error("neodgovarajuca kategorija");
    return await Category.create({ // pravi category po modelu
        ...data // duboka kopija sadrzaja iz data inace se koristi cloneDeep() metoda iz Lodash biblioteke
    })
};
const deleteOneCategory = () => {};
const updateOneCategory = async(id, data) => {
    return await Category.updateOne({
        _id: mongoose.Types.ObjectId(id) // Mijenjamo category gdje je id jednak id primljenom kao parametar
    }, {
        $set: {
            ...data
        }
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