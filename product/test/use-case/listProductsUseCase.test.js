import { createProductUseCase } from "../../src/use-case/createProductUseCase.js"
import { listProductsUseCase } from "../../src/use-case/listProductsUseCase.js";
import { productExample } from "../data/products.js";


/** Imprime products antes de cadastrar qualquer produto */

const emptyProductList = await listProductsUseCase();
console.log("emptyProductList", emptyProductList);

/** Imprime product depois de cadastrar algum produto */
await createProductUseCase(productExample);
const productList = await listProductsUseCase();
console.log("productList", JSON.stringify(productList, undefined, 2));