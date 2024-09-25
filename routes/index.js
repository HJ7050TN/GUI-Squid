const express = require('express');
const router = express.Router();
const userController = require('../controllers/squidUserController');

// Middleware to log incoming requests
router.use((req, res, next) => {
    console.log(`Received request for ${req.url}`);
    next();
});

// User routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);

// Example of a route that could throw an error
router.get('/error', (req, res) => {
    throw new Error('This is a simulated error!');
});

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error stack for debugging
    res.status(500).send('Something went wrong!');  // Send a generic error response
});

module.exports = router;
