import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/databaseClient.js';

export class ProductImage extends Model {
  static associate(models) {}
}

ProductImage.init({
  url: DataTypes.STRING,
  description: DataTypes.STRING,
  product_id: DataTypes.INTEGER
}, {
  sequelize: client,
  modelName: 'ProductImage',
});