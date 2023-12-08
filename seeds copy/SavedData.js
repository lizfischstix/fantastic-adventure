const { Saved } = require('../models');

const saveddata = [
    {
        id: 1,
        user_id: 1,
        game_id: 1,
        favorite: true
    }
]

const seedSaved = () => Saved.bulkCreate(saveddata);

module.exports = seedSaved;