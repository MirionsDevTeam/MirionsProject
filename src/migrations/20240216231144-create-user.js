'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING(50),
      },
      surname: {
        allowNull:false,
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull:false,
        unique:true,
        type: Sequelize.STRING(50)
      },
      nickname: {
        allowNull:false,
        unique:true,
        type: Sequelize.STRING(50)
      },
      password: {
        allowNull:false,
        type: Sequelize.STRING(50)
      },
      birthDate: {
        allowNull:false,
        type: Sequelize.DATEONLY
      },
      imageUrl: {
        type: Sequelize.STRING(50)
      },
      phone: {
        type: Sequelize.STRING(30)
      },
      provincia: {
        allowNull:false,
        type: Sequelize.STRING(50)
      },
      city: {
        allowNull:false,
        type: Sequelize.STRING(50)
      },
      observations: {
        type: Sequelize.STRING(255)
      },
      zipCode: {
        type: Sequelize.STRING(10)
      },
      createdAt: {
        type: Sequelize.DATE
      },
      createdBy: {
        defaultValue:1,
        allowNull:false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      updatedBy: {
        
        type: Sequelize.INTEGER
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      deletedBy: {
        type: Sequelize.INTEGER
      },
      
    });
    await queryInterface.addConstraint("users", {
      fields: ["createdBy"],
      type: "foreign key",
      name: "created_by_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
      //hooks: true,
    });
    await queryInterface.addConstraint("users", {
      fields: ["updatedBy"],
      type: "foreign key",
      name: "updated_by_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
      //hooks: true,
    });
    await queryInterface.addConstraint("users", {
      fields: ["deletedBy"],
      type: "foreign key",
      name: "deleted_by_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
      //hooks: true,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};