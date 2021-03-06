angular.module('app').service('AgendaSrv', function () {

    var appuntamenti = [{
            id: 0,
            titolo: "Appuntamento con angular",
            data: new Date(),
            descrizione: "Oggi ci sarà da divertirsi",
            luogo: "Stella Maris",
            priorita: "#ffa500"

        },
        {
            id: 1,
            titolo: "Compleanno Paolo",
            data: new Date(2017, 03, 20, 09, 00),
            descrizione: "40 anni, festa GRANDE",
            luogo: "Stella Maris",
            priorita: "#ff0000"

        },
        {
            id: 2,
            titolo: "Appuntamento con Patrizia",
            data: new Date(2017, 03, 29, 19, 00),
            descrizione: "Non si può dire",
            luogo: "Stanza 101",
            priorita: "#007f00"

        }
    ];

    var getAppuntamenti = function () {
        return appuntamenti;
    }

    var deleteAppuntamento = function (indice) {
        appuntamenti.splice(indice, 1);
    }

    var getAppuntamento = function (id) {
        return appuntamenti.find(function (el) {
            return el.id == id;
        });
    }

    var aggiornaAppuntamento = function (app) {
        var updateoggetto = angular.copy(app);
        var indice = appuntamenti.findIndex(function (el) {
            return el.id == app.id;
        })
        appuntamenti.splice(indice, 1, updateoggetto);
    }

    var creaAppuntamento = function (nuovo) {
        var nuovoAppuntamento = angular.copy(nuovo);
        var arrayId = [];
        appuntamenti.forEach(function (el) {
            arrayId.push(el.id);
        })
        var id = Math.max(...arrayId);
        nuovoAppuntamento.id = ++id;
        appuntamenti.push(nuovoAppuntamento);
    }

    return {
        getAppuntamenti: getAppuntamenti,
        deleteAppuntamento: deleteAppuntamento,
        getAppuntamento: getAppuntamento,
        aggiornaAppuntamento: aggiornaAppuntamento,
        creaAppuntamento: creaAppuntamento,
    }

});