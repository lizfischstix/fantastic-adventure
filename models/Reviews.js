const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
   {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    game_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'games',
          key: 'id',
        },
      },
    text: {
        type: DataTypes.TEXT,
    },
    stars: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true, // Ensure the value is an integer
            min: 1,       // Minimum value
            max: 5,     // Maximum value
          }
    },
   },
   {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews',
  }
);

module.exports = Reviews;