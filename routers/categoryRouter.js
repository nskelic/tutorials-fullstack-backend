import express from 'express';
import categoryController from '../controllers/category.controller';

const categoryRouter = express.Router();

categoryRouter.route('/').post(categoryController.createOneCategory); 
categoryRouter.route('/getAll').get(categoryController.getAllCategories); // :id rute se odvajaju ispod kako ne bi getAll bio parametar (id)

categoryRouter.route('/:id').post(categoryController.updateOneCategory); 
categoryRouter.route('/:id').delete(categoryController.deleteOneCategory); 
categoryRouter.route('/:id').get(categoryController.getOneCategory); 

export default categoryRouter; 