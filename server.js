require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const henkilokunta = require('./data/henkilokunta.json');

app.get('/henkilokunta', (req, res) => {
    res.json(henkilokunta)
    });

app.use(express.static(path.join(__dirname, './public')));

app.listen(3000, () => {
    console.log(`Server is up on http://localhost:3000`)
});