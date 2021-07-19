'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Opportunities', [
      {
        nonprofitId: 1,
        locationId: 1,
        categoryId: 1,
        oppName: 'Cooking shift',
        oppDate: 2021-8-1,
        capacity: 10,
      },
      {
        nonprofitId: 16,
        locationId: 9,
        categoryId: 2,
        oppName: 'Trauma-Informed De-escalation Training',
        oppDate: 2021-8-14,
        capacity: 25,
      },
      {
        nonprofitId: 5,
        locationId: 5,
        categoryId: 3,
        oppName: 'Nashville Metro Council Meeting Advocacy',
        oppDate: 2021-8-17,
        capacity: 10,
      },
      {
        nonprofitId: 2,
        locationId: 2,
        categoryId: 1,
        oppName: 'Resource center volunteer',
        oppDate: 2021-8-7,
        capacity: 2,
      },
      {
        nonprofitId: 3,
        locationId: 3,
        categoryId: 1,
        oppName: 'Diaper wrapping',
        oppDate: 2021-8-10,
        capacity: 10,
      },
      {
        nonprofitId: 4,
        locationId: 5,
        categoryId: 3,
        oppName: 'Contacting local elected officials',
        oppDate: 2021-8-30,
        capacity: 45,
      },
      {
        nonprofitId: 9,
        locationId: 7,
        categoryId: 2,
        oppName: 'Teaching new readers',
        oppDate: 2021-8-15,
        capacity: 15,
      },
      {
        nonprofitId: 10,
        locationId: 4,
        categoryId: 3,
        oppName: 'March to the capitol in support of prison reform',
        oppDate: 2021-8-14,
        capacity: 100,
      },
      {
        nonprofitId: 12,
        locationId: 8,
        categoryId: 2,
        oppName: 'Cross-cultural communication for volunteers',
        oppDate: 2021-8-25,
        capacity: 10,
      },
      {
        nonprofitId: 6,
        locationId: 6,
        categoryId: 1,
        oppName: 'Sorting school supplies for teachers',
        oppDate: 2021-8-7,
        capacity: 6,
      },

    ], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Opportunities', null, {});
  }
};
