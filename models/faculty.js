'use strict';
module.exports = (sequelize, DataTypes) => {
  var Faculty = sequelize.define('Faculty', {
    name: DataTypes.STRING
  }, {});
  Faculty.associate = function(models) {
    // associations can be defined here
    Faculty.hasMany(models.Program,{foreignKey:'facultyId'})
  };
  return Faculty;
};