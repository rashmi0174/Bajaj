const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST Request Handler
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid data format. "data" should be an array.',
        });
    }

    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;

    // Separate numbers and alphabets, find the highest lowercase alphabet
    data.forEach((item) => {
        if (/^\d+$/.test(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highestLowercase || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    // Create the response
    res.json({
        is_success: true,
        user_id: 'john_doe_17091999',  // Replace with your details
        email: 'john@xyz.com',          // Replace with your email
        roll_number: 'ABCD123',         // Replace with your roll number
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    });
});

// GET Request Handler
app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1,
    });
});

// Start the server
const PORT =5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
