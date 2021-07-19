'use strict';
module.exports = (sequelize, DataTypes) => {
  const Signup = sequelize.define('Signup', {
    oppId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Signup.associate = function(models) {
    Signup.belongsTo(models.Opportunity, { foreignKey: 'oppId'} );

    Signup.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Signup;
};
