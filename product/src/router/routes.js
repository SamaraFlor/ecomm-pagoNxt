import { Router } from 'express';
import { createProductUseCase } from "../src/use-case/createProductUseCase.js";
import { listProducts } from './use-case/listProducts.js';

export const router = Router();

router.get('/products', (request, response) => {
    listProducts()
        .then((data) => {
            response.status(200).json(data);
        })
        .catch((error) => {
            response.status(400).json({ status: 'Error ', message: error.message });
        })
});

router.post('/products', function (request, response) {

    const product = request.body
    createProductUseCase(product)
        .then((data) => {
            response.status(201).json(data);
        })
        .catch((error) => {
            response.status(400).json({ status: 'Error ', message: error.message });
        })
});
