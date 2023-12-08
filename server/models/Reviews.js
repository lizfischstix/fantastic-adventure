const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
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
  text: {
    type: String,
  },
  stars: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger, // Ensure the value is an integer
      message: 'Stars must be an integer.',
      min: 1, // Minimum value
      max: 5, // Maximum value
    },
  },
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
