const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const User = sequelize.define("User",{
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        userFirstName: {
            type: DataTypes.STRING,
            allowNull : false
        },
        userLastName: {
            type: DataTypes.STRING,
            allowNull : false
        },
        userBirthday: {
            type: DataTypes.DATE,
            allowNull : false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        userPoints: {
            type: DataTypes.INTEGER,
            allowNull : false,
            defaultValue: 0
        }
    
    })

    return User;
}
