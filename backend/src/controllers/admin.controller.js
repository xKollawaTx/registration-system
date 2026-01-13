const adminService = require('../services/admin.service');

const updateTotalSeats = async (req, res) => {
  try {
    const { totalSeats } = req.body;

    if (totalSeats === undefined) {
      return res.status(400).json({
        message: 'totalSeats is required'
      });
    }

    const admin = await adminService.updateTotalSeats(totalSeats);

    res.status(200).json({
      message: 'Total seats updated successfully',
      admin
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  updateTotalSeats
};
