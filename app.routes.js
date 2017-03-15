angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when(" ", "/");
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'agenda/agenda.template.html',
            controller: 'AgendaCtrl',
            resolve:{
                appuntamenti: function (AgendaSrv){
                    return AgendaSrv.getAppuntamenti();
                }
            }
        });


});