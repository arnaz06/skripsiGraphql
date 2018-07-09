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
   return queryInterface.bulkInsert('RegistrationGroups',[
     {
      type:'reguler',
      group:'ia',
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
     }, {
       type: 'reguler',
       group: 'ib',
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     }, {
       type: 'reguler',
       group: 'ic',
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     }, {
       type: 'reguler',
       group: 'ic',
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     }, {
       type: 'reguler',
       group: 'iia',
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     }, {
       type: 'reguler',
       group: 'iib',
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
   return queryInterface.bulkDelete('RegistrationsGroups',null,{})
  }
};
