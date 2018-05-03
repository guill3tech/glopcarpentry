
var app = angular.module("miAp", []);
//angular.module('miAp', [])
app.controller('ControladorTareas', ['$scope', function($scope) {

    $scope.nombresitio = "GLOPCARPENTRY";
    $scope.sitio = [{
                    nombresitio: 'GLOPCARPENTRY',
                    direccion: '15490 SW 134 PL APT 509 Miami, FL 33177',
                    telefono: '+1.786.326.6373',
                    email: 'glopcarpentry@gmail.com',
                    facebook: 'https://facebook.com',
                    instagram: 'https://www.instagram.com/glop_carpentry/'
    }];


    $scope.year = new Date();

}]);

