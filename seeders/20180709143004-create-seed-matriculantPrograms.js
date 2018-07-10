'use strict';
let faker= require('faker')

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
    for(let i=0;i<101;i++){
      let obj={}
      let matriculantId = faker.random.number({
        min: 57,
        max: 157
      })
      let programId= faker.random.number({
        min:5,
        max:25
      })
      if ((typeof result[matriculantId] === 'undefined') && (typeof result[programId] === 'undefined')) {
        obj.matriculantId = matriculantId
        obj.programId=programId
        obj.createdAt= new Date().toUTCString()
        obj.updatedAt= new Date().toUTCString()
        result.push(obj)
      }else{
        conflict++
      }
    }
    if(conflict>0){
      for(let i=0;i<conflict;i++){
         let obj = {}
         let matriculantId = faker.random.number({
           min: 57,
           max: 157
         })
         let programId = faker.random.number({
           min: 5,
           max: 25
         })
         if ((typeof result[matriculantId] === 'undefined') && (typeof result[programId] === 'undefined')) {
           obj.matriculantId = matriculantId
           obj.programId = programId
           obj.createdAt = new Date().toUTCString()
           obj.updatedAt = new Date().toUTCString()
           result.push(obj)
         } else {
           conflict++
         }
      }
    }
    console.log(result);
    
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
