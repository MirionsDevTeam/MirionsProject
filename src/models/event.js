'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.User,{as:'creator',foreignKey:'createdBy'}); //Creador del evento
      Event.belongsTo(models.User,{as:'updater',foreignKey:'updatedBy'}); //Actualizador del evento
      Event.belongsTo(models.User,{as:'deleter',foreignKey:'deletedBy'}); //Eliminador del evento
    }
  }
  Event.init({
    title: DataTypes.STRING(50),
    description: DataTypes.STRING,
    provincia: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    eventType: DataTypes.STRING(50),
    minGuests: DataTypes.INTEGER,
    maxGuests: DataTypes.INTEGER,
    observations: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    updatedBy: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
    deletedBy: DataTypes.INTEGER
  }, {
    paranoid:true,
    sequelize,
    modelName: 'Event',
    tableName: 'events'
  });
  return Event;
};