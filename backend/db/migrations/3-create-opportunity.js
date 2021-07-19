'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Opportunities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nonprofitId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      locationId: {
        type: Sequelize.INTEGER,
        references: { model: 'Locations' }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories' }
      },
      oppName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      oppDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Opportunities');
  }
};
