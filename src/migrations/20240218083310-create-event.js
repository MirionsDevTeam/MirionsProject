'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      eventType: {
        type: Sequelize.STRING(50)
      },
      minGuests: {
        type: Sequelize.INTEGER
      },
      maxGuests: {
        type: Sequelize.INTEGER
      },
      observations: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.INTEGER
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint("events", {
      fields: ["deletedBy"],
      type: "foreign key",
      name: "event_user_deleted_by_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
      //hooks: true,
    });
    await queryInterface.addConstraint("events", {
      fields: ["updatedBy"],
      type: "foreign key",
      name: "updated_by_event_user_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
      //hooks: true,
    });
    await queryInterface.addConstraint("events", {
      fields: ["createdBy"],
      type: "foreign key",
      name: "created_by_events_users_fk",
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
    await queryInterface.dropTable('events');
  }
};