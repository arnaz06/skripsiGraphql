'use strict';
const faker= require('faker')

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
    for(let i=0;i<5;i++){
      result.push({
        name: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()   
      })
    }
    return queryInterface.bulkInsert('Users',result,{})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users',null,{})
  }
};
