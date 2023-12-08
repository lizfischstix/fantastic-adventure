const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js');

class Games extends Model { }
Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        thumbnail: {
            type: DataTypes.STRING,
        },
        short_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        game_url: {
            type: DataTypes.STRING,
        },
        genre: {
            type: DataTypes.STRING,
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        developer: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'games',
    }
);

module.exports = Games;
