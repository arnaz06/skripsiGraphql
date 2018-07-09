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
   return queryInterface.bulkInsert('Programs',[
     {
      name: 'Teknik Informatika S1',
      facultyId:4,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
     }, {
       name: 'Sistem Informasi S1',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Desain Komunikasi Visual S1',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Ilmu Komunikasi S1',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Film dan Televisi SST',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Animasi SST',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Teknik Informatika D3',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Broadcasting D3',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Magister Teknik Informatika S2',
       facultyId: 4,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Manajemen S1',
       facultyId: 6,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Akuntansi S1',
       facultyId: 6,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Ekonomi Syariah S1',
       facultyId: 6,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Magister Manajemen S1',
       facultyId: 6,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Sastra Inggris S1',
       facultyId: 5,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Sastra Jepang S1',
       facultyId: 5,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Manajemen Perhotelan SST',
       facultyId: 5,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Kesehatan Masyarakat S1',
       facultyId: 7,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Rekam Medis dan Informasi Kesehatan D3',
       facultyId: 7,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Teknik Elektro S1',
       facultyId: 8,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Teknik Industri S1',
       facultyId: 8,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },{
       name: 'Teknik Biomedis S1',
       facultyId: 8,
       createdAt: new Date().toUTCString(),
       updatedAt: new Date().toUTCString()
     },
    ],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Programs',null,{})
  }
};
