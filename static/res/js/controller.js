var app = angular.module('sensorDashboard', []);
app.controller('dashboardController', function($scope, $http) {

    $scope.selected = false;    //Flag to show if a device was selected
    $scope.devices = [];        //List of all available devices
    $scope.device = {};         //Currently selected device
    $scope.sensor = {};         //Sensor measurements in the currently selected device

    $scope.getDevices = function () {
        $http({
            method: 'GET',
            url: '/api/devices'
        }).then(function successCallback(response) {
            data = response.data;
            console.log(data);
            setTimeout( function() {
                $scope.$apply( function () {
                    $scope.devices = data;
                });
            }, 0);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.deviceDetails = function (id) {
        $http({
            method: 'GET',
            url: '/api/device/' + id
        }).then(function successCallback(response) {
            data = response.data;
            console.log(data);
            setTimeout( function() {
                $scope.$apply( function () {
                    $scope.device = data;
                    $scope.selected = true;
                });
            }, 0);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

    $scope.sensorDetails = function (id) {
        $http({
            method: 'GET',
            url: '/api/sensor/' + id
        }).then(function successCallback(response) {
            data = response.data;
            console.log(data);
            setTimeout( function() {
                $scope.$apply( function () {
                    $scope.sensor = data;
                });
            }, 0);
        }, function errorCallback(response) {
            console.error(response);
        });
    };

});