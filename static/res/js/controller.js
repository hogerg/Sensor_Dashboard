var app = angular.module('sensorDashboard', []);
app.controller('dashboardController', function($scope, $http) {

    $scope.devices = [];

    $scope.getDevices = function () {
        $http({
            method: 'GET',
            url: '/api/devices'
        }).then(function successCallback(response) {
            console.log(response.data);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.deviceDetails = function (id) {
        $http({
            method: 'GET',
            url: '/api/device/' + id
        }).then(function successCallback(response) {
            console.log(response.data);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.sensorDetails = function (id) {
        $http({
            method: 'GET',
            url: '/api/sensor/' + id
        }).then(function successCallback(response) {
            console.log(response.data);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

});