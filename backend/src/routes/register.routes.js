const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');
const validate = require('../validations/validate');
const registerValidation = require('../validations/register.validation');

router.post(
  '/registers',
  validate(registerValidation.createRegister),
  registerController.register
);

// User view
router.get(
  '/registrations',
  validate(registerValidation.getRegisters, 'query'),
  registerController.getUserRegisters
);

// Admin view
router.get(
  '/admin/registrations',
  validate(registerValidation.getRegisters, 'query'),
  registerController.getAdminRegisters
);

module.exports = router;