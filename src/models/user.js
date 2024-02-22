'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {


        User.hasMany(models.User,{as: "created", foreignKey:'createdBy'});  //Creados por usuario
        User.belongsTo(models.User,{as:'creator',foreignKey:'createdBy'});  //Usuario creador

        User.hasMany(models.User,{as: "updated", foreignKey:'updatedBy'});  //Actualizados por usuario
        User.belongsTo(models.User,{as:'updater',foreignKey:'updatedBy'});  //Usuario actualizador

        User.hasMany(models.User,{as: "deleted", foreignKey:'deletedBy'});  //Eliminados por usuario
        User.belongsTo(models.User,{as:'deleter',foreignKey:'deletedBy'});  //Usuario eliminador

        User.hasMany(models.Event,{as:'events_created',foreignKey:'createdBy'});   //Eventos creados por el usuario
        User.hasMany(models.Event,{as:'events_updated',foreignKey:'updatedBy'});   //Eventos actualizados por el usuario
        User.hasMany(models.Event,{as:'events_deleted',foreignKey:'deletedBy'});   //Eventos eliminados por el usuario
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    imageUrl: DataTypes.STRING,
    phone: DataTypes.STRING,
    provincia: DataTypes.STRING,
    city: DataTypes.STRING,
    observations: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    updatedBy: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
    deletedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    tableName:'users'
  });
  return User;
};