const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
require('dotenv').config({path: `${__dirname}./../../../.env`});

const BASE_URL = process.env.BASE_URL;
const X_API_KEY = process.env.X_API_KEY;

const mapRequestParams = (params) => {
    if(params) {
        let requestParams = [];
        for (const queryName in params) {
            requestParams.push({
                name: queryName,
                value: params[queryName]
            });
        };
        requestParams = requestParams.map(i => `${i.name}=${i.value}&`);
        let paramsStr = `?${requestParams.join('')}`.slice(0, -1);
        return paramsStr;
    } else {
        return '';
    };
};

router.route('/search')
.get((req, res) => {
    const params = mapRequestParams(req.query);
    axios.get(`${BASE_URL}/images/search${params}`)
    .then(data => {
        res.json(data.data);
    });
});

router.route('/:id')
.get((req, res) => {
    axios.get(`${BASE_URL}/images/${req.params.id}`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => {
        res.json(data.data);
    });
});

module.exports = router;
