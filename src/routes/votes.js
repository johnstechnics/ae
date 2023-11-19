import { Router } from 'express';
import axios from 'axios';
import 'dotenv/config';

const router = new Router();

// require('dotenv').config({path: `${__dirname}./../../../.env`});

const BASE_URL = process.env.BASE_URL;
const X_API_KEY = process.env.X_API_KEY;

router.route('/')
.get((req, res) => {
    axios.get(`${BASE_URL}/votes`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => { res.json(data.data) });
})
.post((req, res) => {
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
    .then(data => { res.json(data.data) });
});

router.route('/:id')
.delete((req, res) => {
    axios.delete(`${BASE_URL}/votes/${req.params.id}`, { headers: { 'x-api-key': X_API_KEY } })
    .then(data => { res.json(data.data) });
});

export default router;
