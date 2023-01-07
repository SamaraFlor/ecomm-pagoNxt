
import {Model,DataTypes} from "sequelize";
import client from "../../src/repositories/databaseClient.js";
import { findProducts } from "../../src/repositories/productRepository.js";

  export class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Features, {
        foreignKey:'products_id'
      });
      Product.hasMany(models.Images,{
        foreignKey:'Features_id'
      });
     
    }
  }
  Product.init({
      name: DataTypes.STRING,
      value: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      user_id: DataTypes.UUID
  }, 
  {sequelize:client, modelName: 'Product'}
  
 );
 
