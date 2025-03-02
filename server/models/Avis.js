const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Avis = sequelize.define("Avis",{
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
        }
    
    })

    return Avis;
}
