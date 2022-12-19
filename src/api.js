const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
const { query } = require('express');
require('dotenv').config({path: `${__dirname}./../.env`});

const BASE_URL = process.env.BASE_URL;
const X_API_KEY = process.env.X_API_KEY;
// console.log(BASE_URL);

router.route('/images/search')
.get((req, res) => {
    // console.log(req.query.size);
    axios.get(`${BASE_URL}/images/search${req.query.size ? `?size=${req.query.size}` : ''}`)
    .then(data => {
        // console.log(data.data);
        res.json(data.data);
    });
});

router.route('/votes')
.get((req, res) => {
    axios.get(`${BASE_URL}/votes`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => {
        // console.log(data.data);
        res.json(data.data);
    });
})
.post((req, res) => {
    // console.log(req.body);
    // console.log(req.headers);
    axios.post(`${BASE_URL}/votes`, {
        'image_id': req.body.image_id,
        'value': req.body.value
    },
    {
        headers: { 
            'content-type': 'application/json',
            'x-api-key': X_API_KEY 
        }
    })
    .then(data => {
        // console.log(data.data);
        res.json(data.data);
    });
});

router.route('/favourites')
.get((req, res) => {
    axios.get(`${BASE_URL}/favourites`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => {
        // console.log(data.data);
        res.json(data.data);
    });
})
.post((req, res) => {
    console.log(req.body);
    console.log(req.headers);
    axios.post(`${BASE_URL}/favourites`, {
        'image_id': req.body.image_id,
        "sub_id": req.body.sub_id
    },
    {
        headers: { 
            'content-type': 'application/json',
            'x-api-key': X_API_KEY 
        }
    })
    .then(data => {
        console.log(data.data);
        res.json(data.data);
    });
});

router.route('/breeds')
.get((req, res) => {
    axios.get(`${BASE_URL}/breeds`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => {
        // console.log(data.data);
        res.json(data.data);
    });
});

module.exports = router;
