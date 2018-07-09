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
    let result=[]
    for(let i=0;i<20;i++){
      result.push({
        name:faker.address.county(),
        district:faker.address.city(),
        subDistrict:faker.address.streetName(),
        zipcode:faker.address.zipCode(),
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      })
    }
    return queryInterface.bulkInsert('Origins',result,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Origins',null,{})
  }
};
