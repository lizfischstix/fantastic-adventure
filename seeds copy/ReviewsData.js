const { Reviews } = require('../models');

const reviewsdata = [
    {
        id: 1,
        user_id: 1,
        game_id: 5,
        text: "Game is awesome!",
        stars: 4
    }
]

const seedReviews = () => Reviews.bulkCreate(reviewsdata);

module.exports = seedReviews;