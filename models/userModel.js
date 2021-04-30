const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide confirm password'],
    minlength: 8,
    validate: {
      // This only works on CREATE & SAVE,
      // WILL NOT WORK ON PASSWORD UPDATE
      validator: function (val) {
        return val === this.password;
      },
      message: 'Passwords are not same',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
