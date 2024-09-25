const express = require('express');
const app = express();
const PORT = 80;

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes from the routes folder
const routes = require('./routes/index');
app.use('/', routes);

// Catch 404 errors
app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Node.js app is running on port ${PORT}`);
});
