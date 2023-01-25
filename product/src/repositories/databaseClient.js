import { Sequelize } from 'sequelize';

const client = new Sequelize(process.env.DATABASE_URL);

export default client;