'use strict';
module.exports = (sequelize, DataTypes) => {
  var MatriculantProgram = sequelize.define('MatriculantProgram', {
    matriculantId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER
  }, {});
  MatriculantProgram.associate = function(models) {
    // associations can be defined here
    MatriculantProgram.belongsTo(models.Program, {
      foreignKey: 'programId'
    })
    MatriculantProgram.belongsTo(models.Matriculant, {
      foreignKey: 'matriculantId'
    })
  };
  return MatriculantProgram;
};