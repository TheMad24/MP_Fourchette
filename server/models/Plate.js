'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plate.belongsTo(models.Menu, { foreignKey: 'MenuID', as: 'menu' });
    }
  }
  Plate.init({
    plateID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  
  plateName: {
      type: DataTypes.STRING,
      allowNull : false
  },
  plateIngredientes: {
      type: DataTypes.STRING,
      allowNull : false
  },
  plateDescrition: {
      type: DataTypes.STRING,
      allowNull : false
  },
  platePrice: {
      type: DataTypes.INTEGER,
      allowNull : false
  },
  platePic: {
      type: DataTypes.STRING,
  },
  // FK
  MenuID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Menus', 
      key: 'MenuID'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
  }, {
    sequelize,
    modelName: 'Plate',
  });
  return Plate;
};