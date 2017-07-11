'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('mutants', [
        {
          usename: 'wolverine',
          password: 'claws!',
          role: 'owner',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          usename: 'profx',
          password: 'mindgames',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          usename: 'cyclops',
          password: 'lookskill',
          role: 'owner',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          usename: 'storm',
          password: 'umbrella',
          role: 'owner',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          usename: 'beast',
          password: 'bluevelvet',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('mutants', null, {});
  }
};
