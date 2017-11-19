"use strict";

module.exports = function () {
    return {
        list: function (req, res) {
            var deviceList = [
                { id: '1', name: 'Device 1' },
                { id: '2', name: 'Device 2' },
                { id: '3', name: 'Device 3' },
                { id: '4', name: 'Device 4' },
                { id: '5', name: 'Device 5' }
            ];
            res.send(deviceList);
        }
    }
};