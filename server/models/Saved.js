const mongoose = require('mongoose');

const savedSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  game_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Games',
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Saved = mongoose.model('Saved', savedSchema);

module.exports = Saved;
