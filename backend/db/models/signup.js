'use strict';
module.exports = (sequelize, DataTypes) => {
  const Signup = sequelize.define('Signup', {
    oppId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Signup.associate = function(models) {
    // associations can be defined here
  };
  return Signup;
};