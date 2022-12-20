const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
const { query } = require('express');
require('dotenv').config({path: `${__dirname}./../.env`});

const BASE_URL = process.env.BASE_URL;
const X_API_KEY = process.env.X_API_KEY;

const mapRequestParams = (params) => {
    // console.log(params);
    if(params) {
        let requestParams = [];
        for (const queryName in params) {
            requestParams.push({
                name: queryName,
                value: params[queryName]
            });
        };
        // console.log(requestParams);
        requestParams = requestParams.map(i => `${i.name}=${i.value}&`);
        // console.log(requestParams);
        let paramsStr = `?${requestParams.join('')}`.slice(0, -1);
        // console.log(paramsStr);
        return paramsStr;
    } else {
        return '';
    };
};

router.route('/images/search')
.get((req, res) => {
    // console.log(req.query);
    const params = mapRequestParams(req.query);
    axios.get(`${BASE_URL}/images/search${params}`)
    .then(data => {
        // console.log(data.data);
        res.json(data.data);
    });
});

router.route('/images/:id')
.get((req, res) => {
    // console.log(req.query);
    axios.get(`${BASE_URL}/images/${req.params.id}`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => {
        // console.log(data.data);
        res.json(data.data);
    });
});

router.route('/images/upload')
.post((req, res) => {
    console.log('req.files.file:', req.files.file);
    axios.post(`${BASE_URL}/images/upload`, JSON.stringify(req.files.file), { headers: {
        'x-api-key': X_API_KEY,
        'Content-Type': 'multipart/form-data'
    }})
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

router.route('/votes/:id')
.delete((req, res) => {
    // console.log(req.params);
    axios.delete(`${BASE_URL}/votes/${req.params.id}`, {
        headers: { 'x-api-key': X_API_KEY }
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
    // console.log(req.body);
    // console.log(req.headers);
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
        // console.log(data.data);
        res.json(data.data);
    });
});

router.route('/favourites/:id')
.delete((req, res) => {
    axios.delete(`${BASE_URL}/favourites/${req.params.id}`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => {
        // console.log(data.data);
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
