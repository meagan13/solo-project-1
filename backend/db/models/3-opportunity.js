'use strict';
module.exports = (sequelize, DataTypes) => {
  const Opportunity = sequelize.define('Opportunity', {
    nonprofitId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    oppName: DataTypes.STRING,
    oppDate: DataTypes.DATE,
    capacity: DataTypes.INTEGER
  }, {});
  Opportunity.associate = function(models) {
    Opportunity.belongsTo(models.Location, { foreignKey: 'locationId' });

    Opportunity.hasMany(models.Signup, { foreignKey: 'oppId' });

    Opportunity.belongsTo(models.User, { foreignKey: 'nonprofitId' });

    Opportunity.belongsTo(models.Category, { foreignKey: 'categoryId' });
  };
  return Opportunity;
};
