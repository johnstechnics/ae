const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');
const votes = require('./routes/votes');
const favourites = require('./routes/favourites');
const images = require('./routes/images');
const app = express();
require('dotenv').config({path: `${__dirname}./../.env`});
const PORT = process.env.PORT;

app.use(cors());
// app.use(fileUpload());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/votes', votes);
app.use('/api/favourites', favourites);
app.use('/api/images', images);

app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
});
