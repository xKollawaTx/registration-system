const registerService = require("../services/register.service");


// POST /api/registers
const register = async (req, res) => {
  try {
    const register = await registerService.createRegister(req.body);
    res.status(201).json(register);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET /api/registers

// User
const getUserRegisters = async (req, res) => {
  try {
    const result = await registerService.getRegisters(
      req.query,
      "user"
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin
const getAdminRegisters = async (req, res) => {
  try {
    const result = await registerService.getRegisters(
      req.query,
      "admin"
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  getUserRegisters,
  getAdminRegisters,
};
