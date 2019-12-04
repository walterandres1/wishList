'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('users', [{
      email: "example@email.com",
      password: "test",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    email: "email@example.com",
    password: "other",    
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
 return queryInterface.bulkDelete('user', null, {});
  }
};
