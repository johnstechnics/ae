const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
require('dotenv').config({path: `${__dirname}./../../../.env`});

const BASE_URL = process.env.BASE_URL;
const X_API_KEY = process.env.X_API_KEY;

router.route('/')
.get((req, res) => {
    axios.get(`${BASE_URL}/breeds`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => {
        res.json(data.data);
    });
});

module.exports = router;
