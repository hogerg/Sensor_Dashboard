"use strict";

module.exports = function () {
    return {
        details: function (req, res) {
            var id = req.params.id;
            var date = Date.now();

            var mockTemp = {
                id: id,
                name: 'Sensor ' + id,
                type: 'Temperature',
                measurements: [
                    {
                        name: 'Temperature',
                        value: Math.floor((Math.random() * 100) + 1),
                        unit: '°C',
                        date: date
                    }
                ],
                history: [
                    [
                        {
                            name: 'Temperature',
                            value: Math.floor((Math.random() * 100) + 1),
                            date: date - 10000
                        }
                    ],
                    [
                        {
                            name: 'Temperature',
                            value: Math.floor((Math.random() * 100) + 1),
                            date: date - 20000
                        }
                    ],
                    [
                        {
                            name: 'Temperature',
                            value: Math.floor((Math.random() * 100) + 1),
                            date: date - 30000
                        }
                    ],
                    [
                        {
                            name: 'Temperature',
                            value: Math.floor((Math.random() * 100) + 1),
                            date: date - 40000
                        }
                    ]
                ]
            };

            var mockLoc = {
                id: id,
                name: 'Sensor ' + id,
                type: 'Location',
                measurements: [
                    {
                        name: 'Latitude',
                        value: (Math.random() * 180) - 90,
                        unit: '°',
                        date: date
                    },
                    {
                        name: 'Longitude',
                        value: (Math.random() * 360) - 180,
                        unit: '°',
                        date: date
                    }
                ],
                history: [
                    [
                        {
                            name: 'Latitude',
                            value: (Math.random() * 180) - 90,
                            date: date - 10000
                        },
                        {
                            name: 'Longitude',
                            value: (Math.random() * 360) - 180,
                            date: date - 10000
                        }
                    ],
                    [
                        {
                            name: 'Latitude',
                            value: (Math.random() * 180) - 90,
                            date: date - 20000
                        },
                        {
                            name: 'Longitude',
                            value: (Math.random() * 360) - 180,
                            date: date - 20000
                        }
                    ],
                    [
                        {
                            name: 'Latitude',
                            value: (Math.random() * 180) - 90,
                            date: date - 30000
                        },
                        {
                            name: 'Longitude',
                            value: (Math.random() * 360) - 180,
                            date: date - 30000
                        }
                    ],
                    [
                        {
                            name: 'Latitude',
                            value: (Math.random() * 180) - 90,
                            date: date - 40000
                        },
                        {
                            name: 'Longitude',
                            value: (Math.random() * 360) - 180,
                            date: date - 40000
                        }
                    ]
                ]
            };

            var mockAcc = {
                id: id,
                name: 'Sensor ' + id,
                type: 'Acceleration',
                measurements: [
                    {
                        name: 'X axis',
                        value: (Math.random() * 10) - 5,
                        unit: 'm/s^2',
                        date: date
                    },
                    {
                        name: 'Y axis',
                        value: (Math.random() * 10) - 5,
                        unit: 'm/s^2',
                        date: date
                    },
                    {
                        name: 'Z axis',
                        value: (Math.random() * 10) - 5,
                        unit: 'm/s^2',
                        date: date
                    }
                ],
                history: [
                    [
                        {
                            name: 'X axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 10000
                        },
                        {
                            name: 'Y axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 10000
                        },
                        {
                            name: 'Z axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 10000
                        }
                    ],
                    [
                        {
                            name: 'X axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 20000
                        },
                        {
                            name: 'Y axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 20000
                        },
                        {
                            name: 'Z axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 20000
                        }
                    ],
                    [
                        {
                            name: 'X axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 30000
                        },
                        {
                            name: 'Y axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 30000
                        },
                        {
                            name: 'Z axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 30000
                        }
                    ],
                    [
                        {
                            name: 'X axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 40000
                        },
                        {
                            name: 'Y axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 40000
                        },
                        {
                            name: 'Z axis',
                            value: (Math.random() * 10) - 5,
                            date: date - 40000
                        }
                    ]
                ]
            };

            var mockHum = {
                id: id,
                name: 'Sensor ' + id,
                type: 'Humidity',
                measurements: [
                    {
                        name: 'Humidity',
                        value: Math.floor((Math.random() * 30) + 40),
                        unit: '%',
                        date: date
                    }
                ],
                history: [
                    [
                        {
                            name: 'Humidity',
                            value: Math.floor((Math.random() * 30) + 40),
                            date: date - 10000
                        }
                    ],
                    [
                        {
                            name: 'Humidity',
                            value: Math.floor((Math.random() * 30) + 40),
                            date: date - 20000
                        }
                    ],
                    [
                        {
                            name: 'Humidity',
                            value: Math.floor((Math.random() * 30) + 40),
                            date: date - 30000
                        }
                    ],
                    [
                        {
                            name: 'Humidity',
                            value: Math.floor((Math.random() * 30) + 40),
                            date: date - 40000
                        }
                    ]
                ]
            };

            var sensorDetails = [mockTemp, mockLoc, mockAcc, mockHum];
            res.send(sensorDetails[(id-1)%4]);
        }
    }
};