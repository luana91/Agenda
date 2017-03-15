angular.module('app').controller('DettaglioCtrl', function ($scope, appuntamento) {

    $scope.appuntamento = appuntamento;
    console.log($scope.appuntamento);
});