const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Fidelite = sequelize.define("Fidelite",{
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
    
    })

    return Fidelite;
}
