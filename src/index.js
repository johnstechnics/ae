const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const api = require('./api');
const app = express();
require('dotenv').config({path: `${__dirname}./../.env`});
const PORT = process.env.PORT;

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
});
