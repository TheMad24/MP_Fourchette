'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livraison extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Livraison.belongsTo(models.Order, { foreignKey: 'orderID', as: 'order' });
    }
  }
  Livraison.init({
    deliveryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  
  deliveryAddress: {
      type: DataTypes.STRING,
      allowNull : false
  },
  deliveryPayType: {
      type: DataTypes.INTEGER,
      allowNull : false
  },

  // FK
  orderID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Orders', 
      key: 'orderID'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
  }, {
    sequelize,
    modelName: 'Livraison',
  });
  return Livraison;
};