'use strict';
module.exports = (sequelize, DataTypes) => {
  var Origin = sequelize.define('Origin', {
    name: DataTypes.STRING,
    district: DataTypes.STRING,
    subDistrict: DataTypes.STRING,
    zipcode: DataTypes.STRING,
  }, {
    timestamps: true,
  });
  Origin.associate = function(models) {
    // associations can be defined here
  };
  return Origin;
};
