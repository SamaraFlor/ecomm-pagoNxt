import { hash } from "bcryptjs";
import request from "supertest";
import {app} from "../src/app.js";
import {client , getUsersCollection} from "../src/repositories/accountRepository.js";

describe("Created account ", () => {
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    });

    it('create a token', async () => {
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                email: 'samara@email',
                password: 'senha@123'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    token: true,
                    authToken: expect.any(String),
                })
            });
    });
})