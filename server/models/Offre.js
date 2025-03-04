'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Offre.belongsTo(models.Restaurent, { foreignKey: 'restID', as: 'restaurent' });
    }
  }
  Offre.init({
    promoID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  promoName: {
      type: DataTypes.STRING,
      allowNull : false
  },
  promoDescription: {
      type: DataTypes.STRING,
      allowNull : false
  },
  promoType: {
      type: DataTypes.INTEGER,
      allowNull : true
  },
  promoStartDate: {
      type: DataTypes.DATE,
      allowNull : false
  },
  promoEndDate: {
      type: DataTypes.DATE,
      allowNull : false,
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
    modelName: 'Offre',
  });
  return Offre;
};