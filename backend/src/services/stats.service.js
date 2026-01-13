const Register = require('../models/register.model');
const Event = require('../models/event.model');

const getEventStats = async () => {
  const event = await Event.findOne();
  if (!event) {
    throw new Error('ไม่พบข้อมูล');
  }

  const registeredCount = await Register.countDocuments();
  const remainingSeats = event.totalSeats - registeredCount;

  return {
    totalSeats: event.totalSeats,
    registeredCount,
    remainingSeats: remainingSeats < 0 ? 0 : remainingSeats
  };
};

module.exports = {
  getEventStats
};
