'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        locationName: 'Nashville Food Project',
        address: '5904 California Ave.',
        city: 'Nashville',
        state: 'TN',
        zip: '37209',
        lat: 36.16508,
        long: -86.85865,
      },
      {
        locationName: "St Luke's Community House",
        address: '5601 New York Ave.',
        city: 'Nashville',
        state: 'TN',
        zip: '37209',
        lat: 36.16782,
        long: -86.85835,
      },
      {
        locationName: 'Nashville Diaper Connection',
        address: '6100 Centennial Blvd.',
        city: 'Nashville',
        state: 'TN',
        zip: '37209',
        lat: 36.16782,
        long: -86.85835,
      },
      {
        locationName: 'Tennessee State Capitol',
        address: '600 Dr. M.L.K. Jr Blvd.',
        city: 'Nashville',
        state: 'TN',
        zip: '37243',
        lat: 36.165791,
        long: -86.784057,
      },
      {
        locationName: 'David Scobey Council Chambers',
        address: '1 Public Square',
        city: 'Nashville',
        state: 'TN',
        zip: '37201',
        lat: 36.167254,
        long: -86.778436,
      },
      {
        locationName: 'PENCIL',
        address: '7199 Cockrill Bend Blvd.',
        city: 'Nashville',
        state: 'TN',
        zip: '37209',
        lat: 36.169478,
        long: -86.884187,
      },
      {
        locationName: "Book 'em",
        address: '161 Rains Ave.',
        city: 'Nashville',
        state: 'TN',
        zip: '37203',
        lat: 36.135158,
        long: -86.765763,
      },
      {
        locationName: 'Nashville International Center for Empowerment',
        address: '417 Welshwood Dr.',
        city: 'Nashville',
        state: 'TN',
        zip: '37211',
        lat: 36.081796,
        long: -86.729645,
      },
      {
        locationName: 'The Village at Glencliff',
        address: '2901 Glencliff Rd.',
        city: 'Nashville',
        state: 'TN',
        zip: '37211',
        lat: 36.111327,
        long: -86.721043,
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Locations', null, {});

  }
};
