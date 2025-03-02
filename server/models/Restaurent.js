const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Restaurent = sequelize.define("Restaurent",{
        restID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        restName: {
            type: DataTypes.STRING,
            allowNull : false
        },
        restAddress: {
            type: DataTypes.STRING,
            allowNull : false
        },
        restEmail: {
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        },
        restPassword: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        restTel: {
            type: DataTypes.INTEGER,
            allowNull : false,
        },
        restOpening: {
            type: DataTypes.TIME,
            allowNull : false,
        },
        restClosing: {
            type: DataTypes.TIME,
            allowNull : false,
        },
        restDesc: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        restPic: {
            type: DataTypes.STRING,
            allowNull : false,
        },
    
    })

    return Restaurent;
}
