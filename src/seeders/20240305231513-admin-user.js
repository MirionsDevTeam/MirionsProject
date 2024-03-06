'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sequelize_data', {
      name:{
        allowNull:false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      }
    }),
    await queryInterface.bulkInsert('users',[{
      id:1,
        name: "admin",
        surname: "admin",
        nickname: "admin",
        email: "admin@admin",
        password: "admin",
        birthDate: new Date("1950-01-01"),
        provincia: "Madrid",
        city: "Madrid",
        createdAt: new Date(),
        createdBy: 1,
        updatedAt: new Date(),
        updatedBy: 1
        }],{});

        await queryInterface.bulkInsert('sequelize_data', [
          {
            name: 'demo-user'
          }
        ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('sequelize_data', { name: 'demo-user' });
  }
};
