import { saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product, userId) {
    const savedProduct = await saveProduct({...product, user_id: userId });
    return savedProduct;
}