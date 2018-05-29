'use strict';
module.exports = (sequelize, DataTypes) => {
  var Matriculant = sequelize.define('Matriculant', {
    NIK: DataTypes.STRING,
    NISN: DataTypes.STRING,
    fullName: DataTypes.STRING,
    gander: {
      type: DataTypes.ENUM,
      values: ['MALE','FEMALE']
    },
    bloodType: {
      type: DataTypes.ENUM,
      values: ['O','A','B','AB']
    },
    birthPlace: DataTypes.STRING,
    birth: DataTypes.DATE,
    religion: {
      type: DataTypes.ENUM,
      values: ['ISLAM','KRISTEN','HINDU','BUDHA','KATOLIK']
    },
    citizenship: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    fatherBirth: DataTypes.DATE,
    motherName: DataTypes.STRING,
    motherBirth: DataTypes.DATE,
    parentsJob: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    sourceInformation: {
      type: DataTypes.ENUM,
      values: ['TEMAN','KELUARGA','FORUM','GOOGLE','MEDIA CETAK','BALIHO','YOUTUBE','FACEBOOK']
    },
    registrationGroupId: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM,
      values: ['Mundur','Daftar','Ujian','Registrasi']
    },
    originId: DataTypes.INTEGER,
    lastEducationId: DataTypes.INTEGER
  }, {});
  Matriculant.associate = function(models) {
    // associations can be defined here
  };
  return Matriculant;
};
