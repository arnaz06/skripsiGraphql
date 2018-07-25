'use strict';
let faker= require('faker')
const uniqueRandom = require('unique-random');

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
    let conflict=0
    let result=[]
    for(let i=0;i<1632;i++){
      let obj={}
      let obj2={}
      let matriculantId = 1268+i
      let programId = uniqueRandom(5,25)
      obj.matriculantId = matriculantId
      obj.programId = programId()
      obj.createdAt= new Date().toUTCString()
      obj.updatedAt= new Date().toUTCString()
      
      obj2.matriculantId = matriculantId
      obj2.programId = programId()
      obj2.createdAt= new Date().toUTCString()
      obj2.updatedAt= new Date().toUTCString()

      result.push(obj)
      result.push(obj2)

      // ((result.matriculantId.indexOf(matriculantId) != -1) == ((result.matriculantId.indexOf(matriculantId) != -1))
      // if (((result.matriculantId.indexOf(matriculantId) != -1)) && (result.programId.indexOf(programId) != -1)) {
      //   obj.matriculantId = matriculantId
      //   obj.programId=programId
      //   result.push(obj)
      // }else{
      //   conflict++
      // }
    }
    // console.log('1 ', result);
    return queryInterface.bulkInsert('MatriculantPrograms',result,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
