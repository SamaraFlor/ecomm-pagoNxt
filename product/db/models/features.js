'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Features extends Model {
    static associate(models) {
  
      Features.belongsTo(models.product,{
        foreignKey:'products_id'
      })
      Features.belongsTo(models.Imagens,{
        foreignKey:'Imagens_id'
      })

    }
  }
  Features.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Features',
  });
  return Features;
};