const sequelize = require('../config/connection');
const seedUsers = require('./UsersData');
const seedGames = require('./GamesData.js');
const seedReviews = require('./ReviewsData');
const seedSaved = require('./SavedData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedGames();

  await seedReviews();

  await seedSaved();

  process.exit(0);
};

seedAll();
