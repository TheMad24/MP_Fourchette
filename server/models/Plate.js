const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Plate = sequelize.define("Plate",{
        plateID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        plateName: {
            type: DataTypes.STRING,
            allowNull : false
        },
        plateIngredientes: {
            type: DataTypes.STRING,
            allowNull : false
        },
        plateDescrition: {
            type: DataTypes.STRING,
            allowNull : false
        },
        platePrice: {
            type: DataTypes.INTEGER,
            allowNull : false
        },
        platePic: {
            type: DataTypes.STRING,
        }
    })

    return Plate;
}
