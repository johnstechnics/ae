import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// require('dotenv').config({path: `${__dirname}./../.env`});

import breeds from './routes/breeds.js';
import votes from './routes/votes.js';
import favourites from './routes/favourites.js';
import images from './routes/images.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api/breeds', breeds);
app.use('/api/votes', votes);
app.use('/api/favourites', favourites);
app.use('/api/images', images);

app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
});
