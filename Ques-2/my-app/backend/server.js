const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/User_Routes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/DashboardApp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/users', userRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});