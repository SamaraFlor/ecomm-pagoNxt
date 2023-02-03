import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.DATABASE_URL);


export async function getUsersCollection(client) {
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;  
}

export async function saveAccount(account) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
    await client.close();
}

export async function findUserByEmail(email) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    const user = await usersCollection.findOne({ email });
    await client.close();
    return user;  
}

export async function existsByEmail(email) {
    const possibleUser = await findUserByEmail(email);
    return !!possibleUser;
}