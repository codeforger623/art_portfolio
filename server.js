// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path');

// Serve your HTML/CSS frontend
app.use(express.static(path.join(__dirname, 'public')));

// Your Itch.io API key (keep secret!)
const ITCH_API_KEY = 'https://itch.io/api/1/mztq4WNDPZxG9c5WAt5EK9o3sZ6nd2Lg6PrkdBC9';/my-sales
';

// Endpoint to fetch all revenue data for all projects
app.get('/api/revenue', async (req, res) => {
    try {
        // Fetch all sales from your account
        const response = await fetch(`https://itch.io/api/1/${ITCH_API_KEY}/my-sales`);
        const data = await response.json();

        // Optional: aggregate revenue by date or just send all sales
        // For now, sending raw sales array to frontend
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch revenue data' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
