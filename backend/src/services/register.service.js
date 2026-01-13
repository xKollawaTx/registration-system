const Register = require('../models/register.model');
const Event = require('../models/event.model');

// Create new register
const createRegister = async (data) => {
  const event = await Event.findOne();
  if (!event) {
    throw new Error('ไม่พบข้อมูล');
  }

  const registeredCount = await Register.countDocuments();

  if (registeredCount >= event.totalSeats) {
    throw new Error('ไม่สามารถลงทะเบียนเข้างานได้');
  }

  const register = await Register.create(data);
  return register;
};

// Get all registers with search & sort
const getRegisters = async (query, role = 'user') => {
  const {
    search,
    sortBy = 'createdAt',
    order = 'desc',
    page = 1,
    limit = 10
  } = query;

  const filter = {};

  if (search) {
    filter.$or = [
      { firstName: { $regex: search, $options: 'i' } },
      { lastName: { $regex: search, $options: 'i' } },
      { phone: { $regex: search, $options: 'i' } }
    ];
  }

  const sort = {
    [sortBy]: order === 'asc' ? 1 : -1
  };

  const skip = (page - 1) * limit;

  
  const projection =
    role === 'admin'
      ? 'firstName lastName phone'
      : 'firstName lastName';

  const [data, total] = await Promise.all([
    Register.find(filter)
      .select(projection)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit)),
    Register.countDocuments(filter)
  ]);

  return {
    data,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit)
    }
  };
};

module.exports = {
  createRegister,
  getRegisters
};
