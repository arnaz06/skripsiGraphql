'use strict';
module.exports = (sequelize, DataTypes) => {
  var Program = sequelize.define('Program', {
    name: DataTypes.STRING,
    facultyId: DataTypes.INTEGER
  }, {});
  Program.associate = function(models) {
    // associations can be defined here
    Program.hasMany(models.MatriculantProgram, {
      foreignKey: 'programId'
    })
    Program.belongsTo(models.Faculty,{foreignKey: 'facultyId'})
    Program.belongsToMany(models.Matriculant,{through: models.MatriculantProgram,foreignKey:'programId'})
  };
  return Program;
};