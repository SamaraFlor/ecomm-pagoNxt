import { Product } from '../../models/product.js'
import { ProductImage } from '../../models/product_image..js';
import { ProductFeature } from '../../models/product_feature..js';

export async function saveProduct(product) {
    const createdProduct = await Product.create(product, {
        include: [
            { association: Product.ProductFeature, as: 'features',  },
            { association: Product.ProductImage, as: 'images' }
        ]
    });
    await createdProduct.save();
    
    return createdProduct;
}

export async function findProducts() {
    const products = await Product.findAll({ include: [
        {
            model: ProductFeature,
            as: 'features'
        }, {
            model: ProductImage,
            as: 'images'
        }] 
    });
    return products;
}