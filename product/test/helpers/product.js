import { findProducts } from "../../src/repositories/productRepository.js";


export async function  cleanProduct(){
    const products = await findProducts();
    for await (const product of products){
        const producFeaturesDelete = product.features.map(feature => feature.destroy());
        const producImagesDelete = product.images.map(image => image.destroy());

         Promise.all([...producFeaturesDelete,producImagesDelete]);
         product.destroy();
    }
}

