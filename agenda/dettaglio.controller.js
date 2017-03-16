angular.module('app').controller('DettaglioCtrl', function ($scope, AgendaSrv, $state, $timeout) {

    $scope.loading = true;

    $timeout(function () {
        $scope.appuntamento = AgendaSrv.getAppuntamento($state.params.id);
        $scope.loading = false;
    }, 1000);



});