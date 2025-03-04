'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'userID', as: 'user' });
      Order.belongsTo(models.Restaurent, { foreignKey: 'restID', as: 'restaurent' });

    }
  }
  Order.init({
    orderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  
  orderDate: {
      type: DataTypes.STRING,
      allowNull : false
  },
  orderPrice: {
      type: DataTypes.INTEGER,
      allowNull : false
  },
  
  orderStatus: {
      type: DataTypes.STRING,
      allowNull : false,
      defaultValue: 0
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
  },
  
  userID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', 
      key: 'userID'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};