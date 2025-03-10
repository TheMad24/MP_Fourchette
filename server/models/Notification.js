'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init({
    notifID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  notifType: {
      type: DataTypes.INTEGER,
      allowNull : false
  },
  notifMsg: {
      type: DataTypes.STRING,
      allowNull : false
  },
  notifSentDate: {
      type: DataTypes.DATE,
      allowNull : true
  },
  notifSentTime: {
      type: DataTypes.TIME,
      allowNull : true
  }
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};