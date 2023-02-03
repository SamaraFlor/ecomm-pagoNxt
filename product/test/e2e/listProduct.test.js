import request from 'supertest';
import { app } from '../../src/app.js';
import { saveProduct } from '../../src/repositories/productRepository.js';
import { productExample } from '../data/products.js';
import {cleanProductTable} from "../helpers/product.js";

describe('Product List', () => {

    afterEach(async () => {
        cleanProductTable();
    });
    it('should return an empty list of products', async () => {
        await request(app)
            .get('/products')
            .expect(200)
            .expect(({ body }) => {
                expect(body).toEqual([]);
            });
    });

    it('should return a list of products', async () => {
        await saveProduct({...productExample, user_id: 'id-do-usuario'});
        await request(app)
            .get('/products')
            .expect(200)
            .expect(({ body }) => {
                expect(body.length).toBe(1);
                expect(body).toEqual(expect.arrayContaining([{
                        ...productExample,
                        user_id: 'id-do-usuario',
                        value: String(productExample.value),
                        id: expect.any(Number),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                        features: expect.arrayContaining(productExample.features.map(feature => ({
                            ...feature, 
                            id: expect.any(Number),
                            product_id: body[0].id,
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                        }))),
                        images: expect.arrayContaining(productExample.images.map(image => ({
                            ...image, 
                            id: expect.any(Number),
                            product_id: body[0].id,
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                        })))
                    }]));
            });
    });
});