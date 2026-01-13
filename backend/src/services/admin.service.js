const Event = require('../models/event.model');
const Register = require('../models/register.model');

const updateTotalSeats = async (totalSeats) => {
  if (totalSeats < 1) {
    throw new Error('จำนวนที่นั่งทั้งหมดต้องมากกว่า 0');
  }

  const registeredCount = await Register.countDocuments();

  if (totalSeats < registeredCount) {
    throw new Error(
      `ไม่สามารถตั้งค่าจำนวนที่นั่งน้อยกว่าจำนวนผู้ลงทะเบียนแล้ว (${registeredCount} คน)`
    );
  }

  let event = await Event.findOne();

  if (!event) {
    // create event if not exists
    event = await Event.create({
      name: 'Set Total Seats',
      totalSeats
    });
  } else {
    event.totalSeats = totalSeats;
    await event.save();
  }

  return event;
};

module.exports = {
  updateTotalSeats
};
