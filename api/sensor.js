"use strict";

module.exports = function () {
    return {
        details: function (req, res) {
            var id = req.params.id;
            var sensorDetails = {
                id: id,
                name: 'Sensor ' + id,
                type: 'Temperature',
                measurements: [
                    {
                        name: 'Temperature',
                        value: id * 10
                    }
                ]
            };
            res.send(sensorDetails);
        }
    }
};