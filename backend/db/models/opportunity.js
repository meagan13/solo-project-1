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
    // associations can be defined here
  };
  return Opportunity;
};