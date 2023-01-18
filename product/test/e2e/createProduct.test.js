import request from 'supertest';
import {app} from  '../../src/app.js';
import client from '../../src/repositories/databaseClient.js';
import { productExample } from '../data/products.js';


describe('Product Creation', () => {

    // function cleanUpDatabase(client) {
    //     client.cleanUp();
    //   }

    // afterAll(async () => {
    //     cleanUpDatabase(client);
    //   });


      
    
    it('should create a product given required product data', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(productExample)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...productExample,
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: productExample.features.map(feature => ({
                        ...feature, 
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    images: productExample.images.map(image => ({
                        ...image, 
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))
                });
            });
    });
})