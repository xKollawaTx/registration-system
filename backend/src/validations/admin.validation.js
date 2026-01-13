const Joi = require('joi');

const updateTotalSeats = Joi.object({
  totalSeats: Joi.number().integer().min(1).required()
});

module.exports = {
  updateTotalSeats
};