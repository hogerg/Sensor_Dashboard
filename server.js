"use strict";

var express = require('express');
var app = express();

var api = require('./api');

/**
 * Error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Error!');
    console.error(err.stack);
});

var path = require('path');
app.use('/r', express.static(path.join(__dirname, 'static', 'res')));

app.use('/api', api());

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

var server = app.listen(3000, function () {
    console.log('Running on :3000');
});