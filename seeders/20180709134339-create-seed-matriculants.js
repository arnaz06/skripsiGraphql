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
    let result= [] 
    for(let i=0; i<3000; i++){
      result.push({
         NIK: faker.random.alphaNumeric(15),
         NISN: faker.random.alphaNumeric(15),
         fullName: faker.name.findName(),
         gender: faker.random.arrayElement(['FEMALE','MALE']),
         bloodType: faker.random.arrayElement(['O','A','B','AB']),
         birthPlace: faker.address.county(),
         birth: faker.date.past(),
         religion: faker.random.arrayElement(['ISLAM', 'KRISTEN', 'HINDU', 'BUDHA', 'KATOLIK']),
         citizenship: faker.address.country(),
         fatherName: faker.name.findName(),
         fatherBirth: faker.date.past(),
         motherName: faker.name.findName(),
         motherBirth: faker.date.past(),
         parentsJob: faker.name.jobTitle(),
         email: faker.internet.email(),
         phone: '+62'+faker.random.number({min:1000000,max:9999999}),
         password: faker.internet.password(),
         sourceInformation: faker.random.arrayElement(['TEMAN', 'KELUARGA', 'FORUM','GOOGLE','MEDIA CETAK','BALIHO','YOUTUBE','FACEBOOK']),
         registrationGroupId: faker.random.number({min:2,max:7}),
         address: faker.address.streetAddress(),
         status: 'Daftar',
         originId: faker.random.number({min:8,max:26}),
         lastEducationId: faker.random.number({min:5,max:19}),
         userId: faker.random.number({min:2,max:6}),
         createdAt: faker.date.past(),
         updatedAt: faker.date.past()
      })
    }
    return queryInterface.bulkInsert('Matriculants', result, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Matriculants',null,{})
  }
};
