const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Commande = sequelize.define("Commande",{
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
        }
    
    })

    return Commande;
}
