'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restaurent.hasMany(models.Menu, { foreignKey: 'restID', as: 'menu' });
      Restaurent.hasMany(models.Avis, { foreignKey: 'restID', as: 'avis' });
      Restaurent.hasMany(models.Offre, { foreignKey: 'restID', as: 'promo' });
      Restaurent.hasMany(models.Order, { foreignKey: 'restID', as: 'order' });

    }
  }
  Restaurent.init({
    restID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  restName: {
      type: DataTypes.STRING,
      allowNull : false
  },
  restAddress: {
      type: DataTypes.STRING,
      allowNull : false
  },
  restEmail: {
      type: DataTypes.STRING,
      allowNull : false,
      unique: true
  },
  restPassword: {
      type: DataTypes.STRING,
      allowNull : false,
  },
  restTel: {
      type: DataTypes.INTEGER,
      allowNull : false,
  },
  restOpening: {
      type: DataTypes.TIME,
      allowNull : false,
  },
  restClosing: {
      type: DataTypes.TIME,
      allowNull : false,
  },
  restDesc: {
      type: DataTypes.STRING,
      allowNull : false,
  },
  restPic: {
      type: DataTypes.STRING,
      allowNull : false,
  }
  }, {
    sequelize,
    modelName: 'Restaurent',
  });
  return Restaurent;
};