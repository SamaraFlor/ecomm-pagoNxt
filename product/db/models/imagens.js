'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagens extends Model {
  
    static associate(models) {
 
      Imagens.belongsTo(models.product,{
        foreignKey:'products_id'
      })
      Imagens.belongsTo(models.Features,{
        foreignKey:'Features_id'
      })

    }
  }
  Imagens.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Imagens',
  });
  return Imagens;
};