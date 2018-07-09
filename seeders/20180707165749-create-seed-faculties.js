'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Faculties',[
      {
        name: 'Fakultas Ilmu Komputer',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },{
        name: 'Fakultas Ilmu Budaya',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },{
        name: 'Fakultas Ekonomi Bisnis',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },{
        name: 'Fakultas Kesehatan',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },{
        name: 'Fakultas teknik',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }
      ],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkInsertDelete('Faculties',null,{})
  }
};
