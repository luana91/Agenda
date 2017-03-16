angular.module('app').controller('DettaglioCtrl', function ($scope, AgendaSrv, $state, $timeout) {

    $scope.loading = true;

    $timeout(function () {
        $scope.appuntamento = AgendaSrv.getAppuntamento($state.params.id);
        $scope.loading = false;
    }, 500);

    $scope.modifica = function () {
        AgendaSrv.aggiornaAppuntamento($scope.appuntamento);

    }
    $scope.indietro = function () {
        $state.go("/");
    }

});