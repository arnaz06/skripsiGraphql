'use strict';
module.exports = (sequelize, DataTypes) => {
  var Major = sequelize.define('Major', {
    name: DataTypes.STRING,
    facultyId: DataTypes.INTEGER
  }, {});
  Major.associate = function(models) {
    // associations can be defined here
    
    Major.belongsTo(models.Faculty,{foreignKey: 'facultyId'})
    
  };
  return Major;
};