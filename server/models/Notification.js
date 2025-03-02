const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) =>{

    const Notification = sequelize.define("Notification",{
        notifID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        notifType: {
            type: DataTypes.INTEGER,
            allowNull : false
        },
        notifMsg: {
            type: DataTypes.STRING,
            allowNull : false
        },
        notifSentDate: {
            type: DataTypes.DATE,
            allowNull : true
        },
        notifSentTime: {
            type: DataTypes.TIME,
            allowNull : true
        }
    
    })

    return Notification;
}
