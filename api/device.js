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
                        sensors: [1, 2, 3]
                    };
                    res.send(deviceDetails);
                    break;
                case '2':
                    var deviceDetails = {
                        id: '2',
                        name: 'Device 2',
                        sensors: [4, 5]
                    };
                    res.send(deviceDetails);
                    break;
                case '3':
                    var deviceDetails = {
                        id: '3',
                        name: 'Device 3',
                        sensors: [6, 7, 8]
                    };
                    res.send(deviceDetails);
                    break;
                case '4':
                    var deviceDetails = {
                        id: '4',
                        name: 'Device 4',
                        sensors: [9, 10, 11, 12]
                    };
                    res.send(deviceDetails);
                    break;
                case '5':
                    var deviceDetails = {
                        id: '5',
                        name: 'Device 5',
                        sensors: [13, 14]
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