import { MongoClient } from "mongodb";

const client = new MongoClient(('mongodb://admin:senha123@localhost:27017'));

//devolvendo a collection
async function getUsersCollection(client) {
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;  
}

//salvando a conta 
export async function saveAccount(account) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
    await client.close();
}