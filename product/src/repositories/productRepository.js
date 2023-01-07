
import {Product} from "../../db/models/products.js"
import { listProductsUseCase } from "../use-case/listProducts.js";

export async function saveProduct(product) {
    const createdProduct = await Product.create(product);
    await createdProduct.save();
    return createdProduct;
}

export async function findProducts() {
    return listProductsUseCase;
}