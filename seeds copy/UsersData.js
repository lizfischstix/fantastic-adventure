const { Users } = require('../models');

const usersdata = [
{
  "username": "testuser",
  "email": "test@email.com",
  "password": "$2b$10$CjOe7oKuDsfMJP/ofKrJouXk8BJ1qmTJkruDIW8iwCc23ZHRxMQVW"
}
];

const seedUsers = () => Users.bulkCreate(usersdata);

module.exports = seedUsers;
