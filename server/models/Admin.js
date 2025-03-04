'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    adminID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  
  adminFirstName: {
      type: DataTypes.STRING,
      allowNull : false
  },
  adminLastName: {
      type: DataTypes.STRING,
      allowNull : false
  },
  adminUsername: {
      type: DataTypes.STRING,
      allowNull : false,
      unique: true
  },
  adminEmail: {
      type: DataTypes.STRING,
      allowNull : false,
      unique: true
  },
  adminPassword: {
      type: DataTypes.STRING,
      allowNull : false,
  }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};