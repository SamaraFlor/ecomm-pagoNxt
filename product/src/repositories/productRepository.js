import { randomUUID } from 'node:crypto';

const products = [];

export async function saveProduct(product) {
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);

    const productCreated = { id, createdDate, ...product };

    products.push(productCreated);

    return productCreated;
}

export async function findProducts() {
    return products;
}