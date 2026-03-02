JavaScript
const request = require('supertest');
const express = require('express');
const app = express();

// Import your logic (or paste it here for testing)
app.use(express.json());
app.post('/webhook', (req, res) => {
    const { data } = req.body;
    if (typeof data !== 'string') return res.status(400).send();
    const sortedArray = data.split('').sort();
    res.json({ word: sortedArray });
});

describe('One Eleven API Task Validation', () => {
    
    test('Requirement: Should sort "example" correctly', async () => {
        const response = await request(app)
            .post('/webhook')
            .send({ data: "example" });
        
        expect(response.status).toBe(200);
        // Matching the output requirement from the task [cite: 16]
        expect(response.body.word).toEqual(["a", "e", "e", "l", "m", "p", "x"]);
    });

    test('Requirement: Should handle spaces and punctuation alphabetically', async () => {
        // Based on the document example: ["a", "e", "e", " ", "m", "p.", "x"] [cite: 14]
        const response = await request(app)
            .post('/webhook')
            .send({ data: "e m p.eax" });
            
        expect(response.body.word[0]).toBe(" "); // Space usually comes first
        expect(response.body.word).toContain("p."); // Punctuation handling
    });

    test('Requirement: Should return JSON with "word" key', async () => {
        const response = await request(app)
            .post('/webhook')
            .send({ data: "abc" });
            
        expect(response.body).toHaveProperty('word'); [cite: 15, 16]
        expect(Array.isArray(response.body.word)).toBe(true); [cite: 5, 10]
    });
});
