db = db.getSiblingDB("registration_system");

db.createCollection("registers");
db.createCollection("events");

db.events.insertOne({
  name: 'Set Total Seats',
  totalSeats: 50,
  createdAt: new Date(),
  updatedAt: new Date()
});
