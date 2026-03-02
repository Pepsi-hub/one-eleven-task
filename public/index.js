JavaScript
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Receives a string, sorts it and return it as an array
app.post('/webhook', (req, res)=>{
    const {data} = req.body;

    // Validation of data
    if (typeof data !== 'string'){
        return res.status(400).json({ error: 'Data entered must be a string'});
    }

    // Convert string to an array of characters
    // Sort array alphabetically
    const sortedArray = data.split('').sort();

    // Return sorted array as a JSON response
    return res.json({word: sortedArray});
});

app.listen(port, () => console.log('Server running on port &{port}'));