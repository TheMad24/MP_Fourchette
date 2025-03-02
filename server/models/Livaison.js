const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Livraison = sequelize.define("Livraison",{
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
        }
    
    })

    return Livraison;
}
