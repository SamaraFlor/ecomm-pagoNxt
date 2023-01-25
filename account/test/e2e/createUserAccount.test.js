import { afterEach, expect } from '@jest/globals';
import request from 'supertest';
import { app }  from '../../src/app.js';
import { client, getUsersCollection } from '../../src/repositories/accountRepository.js';

describe('Accout creation',()=> {
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    })
    it('should create an user given correct user data', async() => {
        await request (app)
        .post('/accounts')
        .set('Content-Type','application/json')
        .set('Accept','application/json')
        .send({
            name:'Samara',
            email:'samara@email',
            password: 'senha@123'
        })
        .expect(201)
        .expect(({body}) => {
            expect(body).toEqual({
                id: expect.any(String),
                name: 'Samara',
                email:'samara@email',
                createdDate: new Date().toISOString().slice(0,10)
            })
        });
    });
});