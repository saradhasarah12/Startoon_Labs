require('dotenv').config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/DashboardApp',
  PORT: process.env.PORT || 5000
};
