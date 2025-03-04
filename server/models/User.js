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
      User.hasMany(models.Avis, { foreignKey: 'userID', as: 'avis' });
      User.hasMany(models.Order, { foreignKey: 'userID', as: 'order' });
      User.belongsTo(models.Fidelite, { foreignKey: 'fidelID', as: 'fidelite' });
    }
  }
  User.init({
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  
  userFirstName: {
      type: DataTypes.STRING,
      allowNull : false
  },
  userLastName: {
      type: DataTypes.STRING,
      allowNull : false
  },
  userBirthday: {
      type: DataTypes.DATE,
      allowNull : false
  },
  userAddress: {
      type: DataTypes.STRING,
      allowNull : false
  },
  userEmail: {
      type: DataTypes.STRING,
      allowNull : false,
      unique: true
  },
  userPassword: {
      type: DataTypes.STRING,
      allowNull : false,
  },
  userPoints: {
      type: DataTypes.INTEGER,
      allowNull : false,
      defaultValue: 0
  },

  // FK
  fidelID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Fidelites', 
      key: 'fidelID'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};