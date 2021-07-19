'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Signups', [
      {
        oppId: 1,
        userId: 18
      },
      {
        oppId: 8,
        userId: 18
      },
      {
        oppId: 7,
        userId: 18
      },
      {
        oppId: 6,
        userId: 7
      },
      {
        oppId: 6,
        userId: 8
      },
      {
        oppId: 6,
        userId: 11
      },
      {
        oppId: 6,
        userId: 13
      },
      {
        oppId: 6,
        userId: 14
      },
      {
        oppId: 8,
        userId: 15
      },
      {
        oppId: 9,
        userId: 17
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Signups', null, {});

  }
};
