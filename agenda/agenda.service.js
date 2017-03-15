angular.module('app').service('AgendaSrv', function () {

    var appuntamenti = [{
        titolo: "Appuntamento con angular",
        data: new Date(),
        descrizione: "Oggi ci sarà da divertirsi",
        luogo: "Stella Maris",
        priorita: "#ffa500"

    }];

    var getAppuntamenti = function () {
        return appuntamenti;
    }

    return {
        getAppuntamenti: getAppuntamenti
    }

});