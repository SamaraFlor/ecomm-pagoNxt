'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up (queryInterface, Sequelize) {
    const columnDefinitions = {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Products'
          },
          key: 'id',
        }
    };

    queryInterface.addColumn('ProductFeatures', 'product_id', columnDefinitions);
    queryInterface.addColumn('ProductImages', 'product_id', columnDefinitions);
   
  },

  async down (queryInterface, Sequelize) {

    queryInterface.removeColumn('ProductFeatures', 'product_id');
    queryInterface.removeColumn('ProductImages', 'product_id');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};