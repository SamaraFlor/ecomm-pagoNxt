import request from 'supertest';
import { app } from '../../src/app.js';
import { client, getUsersCollection } from '../../src/repositories/accountRepository.js';
import { createUserUseCase } from '../../src/use-case/createUserAccount.js';


describe('Account Creation', () => {
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    });

    it('should generate a token given correct account data', async () => {
        await createUserUseCase('Carolina', 'lina@pagonxt.com', 'senhafácil');
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'lina@pagonxt.com', password: 'senhafácil' })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({ token: expect.any(String) });
            })
    });

    it('should not generate a token given incorrect password account', async () => {
        await createUserUseCase('Carolina', 'lina@pagonxt.com', 'senhafácil');
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'lina@pagonxt.com', password: 'senhafacil' })
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'user e-mail or password incorrect' });
            })
    })

    it('should not generate a token given incorrect email account', async () => {
        await createUserUseCase('Carolina', 'lina@pagonxt.com', 'senhafácil');
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'lina@pagont.com', password: 'senhafácil' })
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'user e-mail or password incorrect' });
            })
    });

    it('should not generate a token given incorrect email account', async () => {
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'lina@pagonxt.com', password: 'senhafácil' })
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'user e-mail or password incorrect' });
            })
    })

});