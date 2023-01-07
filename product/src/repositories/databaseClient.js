import { Sequelize } from 'sequelize';

const client = new Sequelize('mysql://mysqluser:mysqlpass@product-database:3306/products')

export default client