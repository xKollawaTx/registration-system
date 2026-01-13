const Joi = require('joi');

const createRegister = Joi.object({
  firstName: Joi.string().trim().min(1).required(),
  lastName: Joi.string().trim().min(1).required(),
  phone: Joi.string()
    .pattern(/^[0-9]{9,10}$/)
    .required()
    .messages({
      'string.pattern.base': 'เบอร์โทรศัพท์ต้องเป็นตัวเลข 9-10 ตัว'
    })
});

const getRegisters = Joi.object({
  search: Joi.string().allow('').optional(),
  sortBy: Joi.string()
    .valid('firstName', 'lastName', 'phone', 'createdAt')
    .optional(),
  order: Joi.string().valid('asc', 'desc').optional(),
  page: Joi.number().integer().min(1).optional(),
  limit: Joi.number().integer().min(1).max(100).optional()
});

module.exports = {
  createRegister,
  getRegisters
};
