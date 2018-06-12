'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MatriculantMajors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matriculantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Matriculants',
            key: 'id'
          }
      },
      majorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Majors',
            key: 'id'
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matriculantMajors');
  }
};