import SubCategoryServiceHandler from "../services/SubCategory.service";

const getOneSubCategory = async(req, res) => {
    try {
        const {params} = req;
        const subCategory = await SubCategoryServiceHandler.getOneSubCategory(params.id);
        return res.send(subCategory)
    } catch (error) {
        console.log(error);
        return res.send({msg: "Internal server error"}).status(500);
    }
};
const getAllSubCategories = async(req, res) => {
    try {
        const subCategories = await SubCategoryServiceHandler.getAllSubCategories();
        return res.send(subCategories)
    } catch (error) {
        console.log(error);
        return res.send({msg: "Internal server error"}).status(500);
    }
};
const getSubCategoriesByCategory = async(req, res) => {
    try {
        const {params} = req;
        const subCategories = await SubCategoryServiceHandler.getSubCategoriesByCategory(params.id);
        return res.send(subCategories)
    } catch (error) {
        console.log(error);
        return res.send({msg: "Internal server error"}).status(500);
    }
};
const createOneSubCategory = async(req, res) => {
    try {
        const {body} = req;
        //validacija ovdje ili u servisu
        const subCategory = await SubCategoryServiceHandler.createOneSubCategory(body);
        return res.send(subCategory)
    } catch (error) {
        return res.send({msg: "Internal server error"}).status(500);
    }
};
const deleteOneSubCategory = async(req, res) => {
    try {
        const {params} = req;
        const deletedSubCategory = await SubCategoryServiceHandler.deleteOneSubCategory(params.id);
        return res.send(deletedSubCategory)
    } catch (error) {
        console.log(error);
        return res.send({msg: "Internal server error"}).status(500);
    }
};
const updateOneSubCategory = async(req, res) => {
    try {
        const {params, body} = req;
        const subCategory = await SubCategoryServiceHandler.updateOneSubCategory(params.id, body);
        return res.send(subCategory)
    } catch (error) {
        console.log(error);
        return res.send({msg: "Internal server error"}).status(500);
    }
};

const subCategoryController = {
    getOneSubCategory,
    getAllSubCategories,
    createOneSubCategory,
    deleteOneSubCategory,
    updateOneSubCategory,
    getSubCategoriesByCategory
}

export default subCategoryController;