'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.hasMany(models.Plate, { foreignKey: 'MenuID', as: 'plates' });
      Menu.belongsTo(models.Restaurent, { foreignKey: 'restID', as: 'restaurent' });
      
    }
  }
  Menu.init({
    MenuID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  
  MenuName: {
      type: DataTypes.INTEGER,
      allowNull : false
  },

  // FK
  restID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Restaurents', 
      key: 'restID'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};