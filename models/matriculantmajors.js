'use strict';
module.exports = (sequelize, DataTypes) => {
  var MatriculantMajor = sequelize.define('MatriculantMajor', {
    matriculantId: DataTypes.INTEGER,
    majorId: DataTypes.INTEGER
  }, {});
  MatriculantMajor.associate = function(models) {
    // associations can be defined here
    MatriculantMajor.belongsTo(models.Major, {
      foreignKey: 'majorId'
    })
    MatriculantMajor.belongsTo(models.Matriculant, {
      foreignKey: 'matriculantId'
    })
  };
  return MatriculantMajor;
};