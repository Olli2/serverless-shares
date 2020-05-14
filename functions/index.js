const functions = require('firebase-functions');
const sharesRouter = require('./controllers/shares')
const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(cors());
app.use('/shares', sharesRouter);

exports.api = functions.https.onRequest(app)