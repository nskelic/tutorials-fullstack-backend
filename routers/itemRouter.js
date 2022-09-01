import express from 'express';
import ItemController from '../controllers/item.controller';

//PRODI KROZ SVE!!!

const ItemRouter = express.Router();

ItemRouter.route('/').post(ItemController.createOneItem); 
ItemRouter.route('/getAll').get(ItemController.getAllItems); 
ItemRouter.route('/getByCategory/:id').get(ItemController.getItemsByCategory); 
ItemRouter.route('/getBySubCategory/:id').get(ItemController.getItemsBySubCategory); 

ItemRouter.route('/:id').post(ItemController.updateOneItem); 
ItemRouter.route('/:id').delete(ItemController.deleteOneItem); 
ItemRouter.route('/:id').get(ItemController.getOneItem); 

export default ItemRouter; 