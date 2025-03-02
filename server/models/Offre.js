const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Offre = sequelize.define("Offre",{
        promoID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        promoName: {
            type: DataTypes.STRING,
            allowNull : false
        },
        promoDescription: {
            type: DataTypes.STRING,
            allowNull : false
        },
        promoType: {
            type: DataTypes.INTEGER,
            allowNull : true
        },
        promoStartDate: {
            type: DataTypes.DATE,
            allowNull : false
        },
        promoEndDate: {
            type: DataTypes.DATE,
            allowNull : false,
        }
    })

    return Offre;
}
