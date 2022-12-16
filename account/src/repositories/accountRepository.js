import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://admin:senha123@mongo_db:27017');

async function getUsersCollection(client) {
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