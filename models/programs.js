'use strict';
module.exports = (sequelize, DataTypes) => {
  var Program = sequelize.define('Program', {
    name: DataTypes.STRING,
    facultyId: DataTypes.INTEGER
  }, {});
  Program.associate = function(models) {
    // associations can be defined here
    
    Program.belongsTo(models.Faculty,{foreignKey: 'facultyId'})
    
  };
  return Program;
};