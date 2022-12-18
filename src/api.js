const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
const { query } = require('express');
require('dotenv').config({path: `${__dirname}./../.env`});

const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL);

router.route('/images/search')
.get((req, res) => {
    console.log(req.query.size);
    axios.get(`${BASE_URL}/images/search${req.query.size ? `?size=${req.query.size}` : ''}`)
    .then(data => {
        console.log(data.data);
        res.json(data.data);
    });
});

module.exports = router;
