const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // Basic email validation
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

// Add a method to the schema for password verification
usersSchema.methods.checkPassword = function (loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
};

// Hash the password before saving to the database
usersSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
