import { randomUUID } from 'node:crypto';
import { Router } from 'express';
import {decriptToken} from "./helpers/token.js";
import { createProductUseCase } from './use-case/createProductUseCase.js';
import {listProductsUseCase}from "./use-case/listProducts.js"


const router = Router();

router.post('/products', async (request, response) => {
    const authorizationHeader = request.headers.authorization;
    if(!authorizationHeader) {
        return response.status(401).json({ message: 'authentication required' })
    }
    
    const token = authorizationHeader.split(' ')[1];
    
    if(!token) {
        return response.status(401).json({ message: 'authorization header malformed'});
    }
    
    const tokenDecripted = decriptToken(token);
    const userId = tokenDecripted.userId;

    if(!userId) {
        return response.status(403).json({ message: 'forbidden' });
    }
    
    const productToCreate = request.body;
    const { hasErrors, errors, product } = await createProductUseCase(productToCreate, userId);
    
    if(hasErrors) {
        return response.status(400).json(errors);
    }

    return response.status(201).json(product);

});

router.get('/products', async (request, response) => {
    const products = await listProductsUseCase();

    return response.json(products);
});

export { router };