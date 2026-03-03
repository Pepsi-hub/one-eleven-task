const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// POST endpoint as required by task [cite: 7]
app.post('/webhook', (req, res) => {
    const { data } = req.body;

    // Validation
    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Data entered must be a string' });
    }

    // Convert string to array and sort alphabetically [cite: 10, 13]
    const sortedArray = data.split('').sort();

    // Return in the required JSON format [cite: 16]
    return res.json({ word: sortedArray });
});

app.listen(port, () => console.log(`Server running on port ${port}`));