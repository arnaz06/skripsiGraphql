'use strict';
module.exports = (sequelize, DataTypes) => {
  var LastEducation = sequelize.define('LastEducation', {
    schoolName: DataTypes.STRING,
    major: DataTypes.STRING,
    originId: DataTypes.INTEGER
  }, {
    timestamps: true
  });
  LastEducation.associate = function(models) {
    // associations can be defined here
    LastEducation.belongsTo(models.Origin, {foreignKey: 'originId'})
  };
  return LastEducation;
};
