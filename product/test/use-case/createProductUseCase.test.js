import { createProductUseCase } from '../../src/use-case/createProductUseCase.js';

import { productExample } from '../data/products.js';


const createdProduct = await createProductUseCase(productExample);

console.log(createdProduct);