angular.module('app').service('AgendaSrv', function () {

    var appuntamenti = [{
        titolo: "Appuntamento con angular",
        data: new Date(),
        descrizione: "Oggi ci sarà da divertirsi",
        luogo: "Stella Maris",
        priorita: "#ffa500"

    }, {
        titolo: "Compleanno Paolo",
        data: new Date(2017, 03, 20, 09, 00),
        descrizione: "40 anni, festa GRANDE",
        luogo: "Stella Maris",
        priorita: "red"

    }];

    var getAppuntamenti = function () {
        return appuntamenti;
    }

    return {
        getAppuntamenti: getAppuntamenti
    }

});