import { saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product) {
        const savedProduct = await saveProduct(product);
        return savedProduct;
    
}