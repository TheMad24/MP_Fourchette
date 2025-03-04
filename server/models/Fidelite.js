'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fidelite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fidelite.hasMany(models.User, { foreignKey: 'fidelID', as: 'fidel' });
    }
  }
  Fidelite.init({
    fidelID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  fidelPoints: {
      type: DataTypes.STRING,
      allowNull : false
  },
  fidelLastUpdated: {
      type: DataTypes.DATE,
      allowNull : false
  }
  }, {
    sequelize,
    modelName: 'Fidelite',
  });
  return Fidelite;
};