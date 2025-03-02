const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Menu = sequelize.define("Menu",{
        MenuID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        MenuName: {
            type: DataTypes.INTEGER,
            allowNull : false
        }
    
    })

    return Menu;
}
