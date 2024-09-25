// controllers/userController.js
const { exec } = require('child_process');


exports.createUser = async (req, res) => {

};







/* // Simulated user data (this can be replaced with a database in the future)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Get all users
exports.getAllUsers = (req, res) => {
    res.json(users);
};

// Get a user by ID
exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
};

// Create a new user
exports.createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
}; */


