import request from 'supertest';
import { app } from '../../src/app.js';
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
                name: 'Maria',
                email: 'maria@email.com',
                password: 'senha123'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    id: expect.any(String),
                    name: 'Maria',
                    email: 'maria@email.com',
                    createdDate: new Date().toISOString().slice(0, 10)
                })
            });
    });

    it('should not create an user given an already used e-mail', async () => {
        await createUserUseCase('Sabrina', 'sabrina@email.com', 'senhafacil1234');
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Sabrina',
                email: 'sabrina@email.com',
                password: 'senhafacil1234'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual({
                    message: 'User already registered'
                })
            });
    });
});