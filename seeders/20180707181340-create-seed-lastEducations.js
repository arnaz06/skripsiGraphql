'use strict';
const faker = require('faker')


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
    return queryInterface.bulkInsert('LastEducations', [
      {
        schoolName:'SMA N 1 SEMARANG',
        major: 'IPA',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 1 SEMARANG',
        major: 'IPS',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 1 SEMARANG',
        major: 'BAHASA',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 2 SEMARANG',
        major: 'IPA',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 2 SEMARANG',
        major: 'IPS',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 2 SEMARANG',
        major: 'BAHASA',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 3 SEMARANG',
        major: 'IPA',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 3 SEMARANG',
        major: 'IPS',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMA N 3 SEMARANG',
        major: 'BAHASA',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMK GRAFIKA',
        major: 'Multimedia',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMK GRAFIKA',
        major: 'Produksi',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMK GRAFIKA',
        major: 'Persiapan',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },{
        schoolName:'SMK N 4 SEMARANG',
        major: 'TKJ',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMK N 4 SEMARANG',
        major: 'RPL',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }, {
        schoolName: 'SMK N 4 SEMARANG',
        major: 'Multimedia',
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },
  ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('LastEducations', null, {})
  }
};
