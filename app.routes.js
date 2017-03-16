angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when(" ", "/");
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'agenda/agenda.template.html',
            controller: 'AgendaCtrl',
            resolve: {
                appuntamenti: function (AgendaSrv) {
                    return AgendaSrv.getAppuntamenti();
                }
            }
        })
        .state('dettaglio', {
            url: '/dettaglio/:id',
            templateUrl: 'agenda/dettaglio.template.html',
            controller: 'DettaglioCtrl',

        })
        .state('nuova', {
            url: '/dettaglio/nuova',
            templateUrl: 'agenda/dettaglio.nuova.html',
            controller: 'NuovaCtrl',

        })

});