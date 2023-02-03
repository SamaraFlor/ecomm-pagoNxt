import { randomUUID } from 'node:crypto';
import request from 'supertest';
import { app } from '../../src/app.js';
import { productExample } from '../data/products.js';
import { cleanProductTable } from '../helpers/product.js';
import { generateToken } from '../../../account/src/helpers/token.js';


describe('Product Creation', () => {

    afterEach(async () => {
        await cleanProductTable();
    });

    it('should create a product given required product data', async () => {
        const userId = randomUUID();
        const userToken = generateToken(userId, 20);
        
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${userToken}`)
            .send(productExample)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...productExample,
                    id: expect.any(Number),
                    user_id: userId,
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

    it('should not create a product when no authorization info is provided', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'authentication required' });
            });
    });

    it('should not create a product when authorization info is malformed', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', 'header-errado')
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'authorization header malformed'});
            });
    });

    it('should not create a product when authorization info was modified', async () => {
        const modifiedToken = generateToken(randomUUID()) + 'a';
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${modifiedToken}`)
            .expect(403)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'forbidden' });
            });
    });

    it('should not create a product when user id is not valid', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${generateToken(randomUUID())}`)
            .send({...productExample, description: '' })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual([
                    {
                        property: 'description',
                        message: expect.any(String)
                    }
                ]);
            });
    });
});