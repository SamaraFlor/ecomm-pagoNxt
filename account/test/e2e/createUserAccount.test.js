import request from 'supertest';
import {app} from "../../src/app.js";
import { client,getUsersCollection } from '../../src/repositories/accountRepository.js';
import { createUserUseCase } from '../../src/use-case/createUserAccount.js';

describe('Account Creation', () => {
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    });

    it('should create an user given correct user data', async () => {
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Luana',
                email: 'luana@pagonxt.com',
                password: '123pago@23'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    id: expect.any(String),
                    name: 'Luana',
                    email: 'luana@pagonxt.com',
                    createdDate: new Date().toISOString().slice(0, 10)
                })
            });
    });

    it('should not create an user given an already used e-mail', async () => {
        await createUserUseCase('Suelen', 'suelen@pagonxt.com', 'suelenUp23');
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Suelen',
                email: 'suelen@pagonxt.com',
                password: '123pago@23'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual([{
                    property: 'email',
                    message: 'email already used'
                }])
            });
    });

    it('should not create an user given invalid e-mail', async () => {
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Suelen',
                email: 'suelenpagonxt.com',
                password: '123pago@23'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual(expect.arrayContaining([
                    {
                        message: expect.any(String),
                        property: 'email'
                    }
                ]))
            });
    });
});