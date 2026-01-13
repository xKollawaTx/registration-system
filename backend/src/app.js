const express = require('express');
const cors = require('cors');
require('dotenv').config();

const registerRoutes = require('./routes/register.routes');
const statsRoutes = require('./routes/stats.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', registerRoutes);
app.use('/api', statsRoutes);
app.use('/api', adminRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;
