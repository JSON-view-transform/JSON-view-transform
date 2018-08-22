// environment variables
require('dotenv').config();

// express app
const express = require('express');
const app = express();

// express middleware
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

// set up postgres pool
const {Pool} = require('pg');
const pool = new Pool({connectionString: process.env.pgURI});

// apply middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days, converted to milliseconds
    keys: [process.env.cookieKey] // encryption for cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

// define authentication strategy
require('./services/googlePassport')(pool);

// create server routes
require('./routes/auth')(app);

// set up server
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

