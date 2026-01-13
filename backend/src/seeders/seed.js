const mongoose = require("mongoose");
const Event = require("../models/event.model");
const Register = require("../models/register.model");

const MONGO_URI = process.env.MONGO_URI;

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🌱 Connected to MongoDB");

    const eventExists = await Event.findOne();
    if (!eventExists) {
      await Event.create({
        name: "Main Event",
        totalSeats: 50,
      });
      console.log("✅ Event created (50 seats)");
    }

    const count = await Register.countDocuments();
    if (count >= 30) {
      console.log("⚠️ Users already seeded");
      process.exit(0);
    }

    const users = Array.from({ length: 30 }).map((_, i) => ({
      firstName: `User${i + 1}`,
      lastName: "Seeder",
      phone: `08${(10000000 + i).toString().slice(0, 8)}`,
    }));

    await Register.insertMany(users);
    console.log("✅ Seeded 30 users");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeder error:", err);
    process.exit(1);
  }
};

seed();
