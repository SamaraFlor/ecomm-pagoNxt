import { Router } from 'express';
import { createProductUseCase } from './use-case/createProductUseCase.js';
import { listProductsUseCase } from './use-case/listProducts.js';

const router = Router();

router.post('/products', async (request, response) => {
    const product = request.body;
    const createdProduct = await createProductUseCase(product);

    return response.status(201).json(createdProduct);
});

router.get('/products', async (request, response) => {
    const products = await listProductsUseCase();

    return response.status(201).json(products);
});

export { router };