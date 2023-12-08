const Games = require('./Games.js');
const Users = require('./Users.js');
const Saved = require('./Saved.js');
const Reviews = require('./Reviews.js');

Users.belongsToMany(Games, {
    through: {
        model: Saved,
        unique: false,
    },
    as: 'UserChoices'
});

Games.belongsToMany(Users, {
    through: {
        model: Saved,
        unique: false,
    },
    as: 'savedGames'
});

Users.belongsToMany(Games, {
    through: {
        model: Reviews,
        unique: false,
    },
    as: 'userReviews'
});

Games.belongsToMany(Users, {
    through: {
        model: Reviews,
        unique: false,
    },
    as: 'reviewedGames'
});

module.exports = {
    Games,
    Users,
    Saved,
    Reviews
};
