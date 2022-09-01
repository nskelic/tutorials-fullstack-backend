import ItemServiceHandler from "../services/item.service";

const getOneItem = async(req, res) => {
    try {
        const {params} = req;
        const Item = await ItemServiceHandler.getOneItem(params.id);
        return res.send(Item)
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(500);
    }
};
const getAllItems = async(req, res) => {
    try {
        const Items = await ItemServiceHandler.getAllItems();
        return res.send(Items)
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(500);
    }
};
const getItemsByCategory = async(req, res) => {
    try {
        const {params} = req;
        const Items = await ItemServiceHandler.getItemsByCategory(params.id);
        return res.send(Items)
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(500);
    }
};
const getItemsBySubCategory = async(req, res) => {
    try {
        const {params} = req;
        const Items = await ItemServiceHandler.getItemsBySubCategory(params.id);
        return res.send(Items)
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(500);
    }
};
const createOneItem = async(req, res) => {
    try {
        const {body} = req;
        const Item = await ItemServiceHandler.createOneItem(body);
        return res.send(Item)
    } catch (error) {
        return res.send(error.message).status(500);
    }
};
const deleteOneItem = async(req, res) => {
    try {
        const {params} = req;
        const deletedItem = await ItemServiceHandler.deleteOneItem(params.id);
        return res.send(deletedItem)
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(500);
    }
};
const updateOneItem = async(req, res) => {
    try {
        const {params, body} = req;
        const Item = await ItemServiceHandler.updateOneItem(params.id, body);
        return res.send(Item)
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(500);
    }
};

const ItemController = {
    getOneItem,
    getAllItems,
    createOneItem,
    deleteOneItem,
    updateOneItem,
    getItemsByCategory,
    getItemsBySubCategory
}

export default ItemController;