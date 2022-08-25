import express from 'express';
import subCategoryController from '../controllers/subCategory.controller';

const subCategoryRouter = express.Router();

subCategoryRouter.route('/').post(subCategoryController.createOneSubCategory); 
subCategoryRouter.route('/getAll').get(subCategoryController.getAllSubCategories); 
subCategoryRouter.route('/getByCategory/:id').get(subCategoryController.getSubCategoriesByCategory); 

subCategoryRouter.route('/:id').post(subCategoryController.updateOneSubCategory); 
subCategoryRouter.route('/:id').delete(subCategoryController.deleteOneSubCategory); 
subCategoryRouter.route('/:id').get(subCategoryController.getOneSubCategory); 

export default subCategoryRouter; 