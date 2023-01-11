import { Sequelize } from 'sequelize';

const client = new Sequelize('mysql://mysqluser:mysqlpass@product-database/products');

export default client;