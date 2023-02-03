import joi from 'joi';

import { saveProduct } from '../repositories/productRepository.js';

const productValidator = joi.object({
    name: joi.string().trim().required(),
    user_id: joi.string().trim().required().guid({ version: ['uuidv4']}),
    value: joi.number().min(0.1).required(),
    quantity: joi.number().min(1).required(),
    description: joi.string().trim().min(200).max(500).required(),
    category: joi.string().trim().required(),
    features: joi.array().min(3).required().items(
        joi.object({
            name: joi.string().trim().required(),
            description: joi.string().trim().required(),
        })
    ),
    images: joi.array().min(3).required().items(
        joi.object({
            url: joi.string().trim().required().uri({ scheme: [/https?/] }),
            description: joi.string().trim().required(),
        })
    ),
})


export async function createProductUseCase(product, userId) {
    const productToSave = {...product, user_id: userId };

    const { error } = productValidator.validate(productToSave, { abortEarly: false });

    if(error) {
       return { 
            hasErrors: true, 
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })), 
            product: productToSave,
        }
    }
    const savedProduct = await saveProduct(productToSave);

    return {
        hasErrors: false,
        errors: undefined,
        product: savedProduct
    };
}