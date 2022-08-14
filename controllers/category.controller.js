import categoryServiceHandler from "../services/category.service";

const getOneCategory = () => {};
const getAllCategories = () => {};
const createOneCategory = async(req, res) => {
    try {
        const {body} = req;
        //validacija ovdje ili u servisu
        const category = await categoryServiceHandler.createOneCategory(body);
        return res.send(category)
    } catch (error) {
        return res.send({msg: "Internal server error"}).status(500);
    }
};
const deleteOneCategory = () => {};
const updateOneCategory = async(req, res) => {
    try {
        const {params, body} = req;
        const category = await categoryServiceHandler.updateOneCategory(params, body);
        return res.send(category)
    } catch (error) {
        console.log(error);
        return res.send({msg: "Internal server error"}).status(500);
    }
};

const categoryController = {
    getOneCategory,
    getAllCategories,
    createOneCategory,
    deleteOneCategory,
    updateOneCategory,
}

export default categoryController;