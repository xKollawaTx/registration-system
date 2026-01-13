const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const validate = require('../validations/validate');
const adminValidation = require('../validations/admin.validation');

// Admin API
router.put(
  '/admin/event/seats',
  validate(adminValidation.updateTotalSeats),
  adminController.updateTotalSeats
);

module.exports = router;
