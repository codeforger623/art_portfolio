// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path');

// Serve your HTML/CSS frontend
app.use(express.static(path.join(__dirname, 'public')));

// Your Itch.io API key (keep secret!)
const ITCH_API_KEY = 'YOUR_API_KEY_HERE'; 
const GAME_ID = 'YOUR_GAME_ID_HERE';

// Endpoint to fetch revenue data
app.get('/api/revenue', async (req, res) => {
    try {
        const response = await fetch(`https://itch.io/api/1/${ITCH_API_KEY}/game/${GAME_ID}/sales`);
        const data = await response.json();
        res.json(data); // send JSON to frontend
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch revenue data' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
