"use strict";

var {Router} = require('express');
var bodyParser = require('body-parser');

var Devices = require('./devices');
var Device = require('./device');
var Sensor = require('./sensor');

module.exports = function () {
    var router = Router();

    router.use(bodyParser.json());

    var devices = Devices();
    var device = Device();
    var sensor = Sensor();

    router.get("/devices", devices.list);
    router.get("/device/:id", device.details);
    router.get("/sensor/:id", sensor.details);

    return router;
};