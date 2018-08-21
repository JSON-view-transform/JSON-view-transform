// environment variables
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const router = require('./router');


const app = express();

// middleware
app.use(bodyParser.json());
app.use(cookieParser());


const PORT = 4000;
// create server routes here
router(app);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
