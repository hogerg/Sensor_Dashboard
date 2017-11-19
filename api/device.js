"use strict";

module.exports = function () {
    return {
        details: function (req, res) {
            var id = req.params.id;
            switch (id) {
                case '1':
                    var deviceDetails = {
                        id: '1',
                        name: 'Device 1',
                        sensors: [
                            { id: 1, name: 'Temperature'},
                            { id: 2, name: 'Location'},
                            { id: 3, name: 'Acceleration'}
                        ]
                    };
                    res.send(deviceDetails);
                    break;
                case '2':
                    var deviceDetails = {
                        id: '2',
                        name: 'Device 2',
                        sensors: [
                            { id: 4, name: 'Humidity'},
                            { id: 5, name: 'Temperature'}
                        ]
                    };
                    res.send(deviceDetails);
                    break;
                case '3':
                    var deviceDetails = {
                        id: '3',
                        name: 'Device 3',
                        sensors: [
                            { id: 6, name: 'Location'},
                            { id: 7, name: 'Acceleration'},
                            { id: 8, name: 'Humidity'}
                        ]
                    };
                    res.send(deviceDetails);
                    break;
                case '4':
                    var deviceDetails = {
                        id: '4',
                        name: 'Device 4',
                        sensors: [
                            { id: 9, name: 'Temperature'},
                            { id: 10, name: 'Location'},
                            { id: 11, name: 'Acceleration'},
                            { id: 12, name: 'Humidity'}
                        ]
                    };
                    res.send(deviceDetails);
                    break;
                case '5':
                    var deviceDetails = {
                        id: '5',
                        name: 'Device 5',
                        sensors: [
                            { id: 13, name: 'Temperature'},
                            { id: 14, name: 'Location'}
                        ]
                    };
                    res.send(deviceDetails);
                    break;
                default:
                    res.sendStatus(500);
                    break;
            }
        }
    }
};