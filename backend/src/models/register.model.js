const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('register', registerSchema);
