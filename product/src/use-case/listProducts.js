import { findProducts } from "../repositories/productRepository.js";

export async function listProductsUseCase() {
    const products = await findProducts();
    return products;
}