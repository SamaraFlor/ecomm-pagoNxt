import request from 'supertest';
import {app} from  '../../src/app.js';

describe('Product List', () => {
    it('should return an empty list of products', async () => {
        await request(app)
            .get('/products')
            .expect(200)
            .expect(({ body }) => {
                expect({body}).toEqual([]);
            });
    });

    // it('should return a list of products', async () => {
    //     await request(app)
    //         .get('/products')
    //         .expect(200)
    //         .expect(({ body }) => {
    //             expect(body).toEqual([]);
    //         });
    // });
})