'use strict';
module.exports = (sequelize, DataTypes) => {
  var RegistrationGroup = sequelize.define('RegistrationGroup', {
    type: DataTypes.STRING,
    group: DataTypes.STRING
  }, {
    timestamps: true,
  });
  RegistrationGroup.associate = function(models) {
    // associations can be defined here
  };
  return RegistrationGroup;
};
