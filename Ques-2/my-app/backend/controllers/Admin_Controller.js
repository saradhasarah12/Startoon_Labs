const User = require('../models/User');

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        
        const formattedUsers = users.map((user, index) => ({
            sNo: index + 1,
            name: user.name,
            email: user.email,
            count: user.count || 0,
            loginDate: user.loginDate || 'N/A'
        }));
        
        res.json(formattedUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
