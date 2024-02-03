const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/contact', contactRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

