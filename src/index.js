const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');
const api = require('./api');
const votes = require('./routes/votes');
const app = express();
require('dotenv').config({path: `${__dirname}./../.env`});
const PORT = process.env.PORT;

app.use(cors());
// app.use(fileUpload());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);
app.use('/votes', votes);

app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
});
