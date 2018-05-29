'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NIK: {
        type: Sequelize.STRING,
        allowNull: false
      },
      NISN: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM('MALE','FEMALE'),
        allowNull: false
      },
      bloodType: {
        type: Sequelize.ENUM('O','A','B','AB'),
        allowNull: false
      },
      birthPlace: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      religion: {
        type: Sequelize.ENUM('ISLAM','KRISTEN','HINDU','BUDHA','KATOLIK'),
        allowNull: false
      },
      citizenship: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fatherName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fatherBirth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      motherName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      motherBirth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      parentsJob: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sourceInformation: {
        type: Sequelize.ENUM('TEMAN','KELUARGA','FORUM','GOOGLE','MEDIA CETAK','BALIHO','YOUTUBE','FACEBOOK'),
        allowNull: false
      },
      registrationGroupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
         model: 'RegistrationGroups',
         key: 'id'
       }
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Mundur','Daftar','Ujian','Registrasi'),
        allowNull: false
      },
      originId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
         model: 'Origins',
         key: 'id'
       }
     },
      lastEducationId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
         model: 'LastEducations',
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
    return queryInterface.dropTable('Matriculants');
  }
};
