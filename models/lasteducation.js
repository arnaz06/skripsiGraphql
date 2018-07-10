'use strict';
module.exports = (sequelize, DataTypes) => {
  var LastEducation = sequelize.define('LastEducation', {
    schoolName: DataTypes.STRING,
    major: DataTypes.STRING,
  }, {
    timestamps: true
  });
  return LastEducation;
};
