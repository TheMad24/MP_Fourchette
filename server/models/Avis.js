'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Avis.belongsTo(models.User, { foreignKey: 'userID', as: 'user' });
      Avis.belongsTo(models.Restaurent, { foreignKey: 'restID', as: 'restaurent' });

    }
  }
  Avis.init({
    avisID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  
  avisNote: {
      type: DataTypes.INTEGER,
      allowNull : false
  },
  avisComment: {
      type: DataTypes.STRING,
      allowNull : false
  },
  avisDate: {
      type: DataTypes.DATE,
      allowNull : false
  },

  // FK
  userID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', 
      key: 'userID'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  
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
    modelName: 'Avis',
  });
  return Avis;
};