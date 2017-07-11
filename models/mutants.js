'use strict';
module.exports = function(sequelize, DataTypes) {
  var mutants = sequelize.define('mutants', {
    usename: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return mutants;
};