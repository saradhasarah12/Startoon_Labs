const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/DashboardApp', { useNewUrlParser: true, useUnifiedTopology: true });

const createAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({ role: 'admin' });
        if (existingAdmin) {
            console.log('Admin already exists');
            return;
        }

        const admin = new User({
            name: 'Admin User',
            email: 'admin@email.com',
            password: await bcrypt.hash('Admin@123', 10),
            gender: 'Male',
            phone: '1234567890',
            role: 'admin'
        });

        await admin.save();
        console.log('Admin created successfully');
    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        mongoose.connection.close();
    }
};

createAdmin();
