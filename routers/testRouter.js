import express from 'express';
import testController from '../controllers/testController';

const testRouter = express.Router();

testRouter.route('/get-example').get(testController.testController); //ova ruta ne prihvata id odnosno nema parametara samo body i query
testRouter.route('/get-example/:id').get(testController.testController);

export default testRouter;