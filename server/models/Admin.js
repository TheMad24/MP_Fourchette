const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Admin = sequelize.define("Admin",{
        adminID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        adminFirstName: {
            type: DataTypes.STRING,
            allowNull : false
        },
        adminLastName: {
            type: DataTypes.STRING,
            allowNull : false
        },
        adminUsername: {
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        },
        adminEmail: {
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        },
        adminPassword: {
            type: DataTypes.STRING,
            allowNull : false,
        }
    
    })

    return Admin;
}
