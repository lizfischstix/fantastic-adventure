const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnail: String,
  short_description: {
    type: String,
    required: true,
  },
  game_url: String,
  genre: String,
  platform: {
    type: String,
    required: true,
  },
  developer: String,
});

const Games = mongoose.model('Games', gamesSchema);

module.exports = Games;
