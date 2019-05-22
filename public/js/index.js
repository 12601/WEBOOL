var app = angular.module('webool', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/inicio.html'
    });

    $routeProvider.when('/sobre', {
        templateUrl: 'partials/sobre.html'
    });

    $routeProvider.when('/atividades', {
        templateUrl: 'partials/atividades.html'
    });

    // Artes

    $routeProvider.when('/artes', {
        templateUrl: 'partials/artes/inicio.html',
    });

    $routeProvider.when('/artes/atividade01', {
        templateUrl: 'partials/artes/atividade01/inicio.html',
    });

    $routeProvider.when('/artes/atividade01/pintor', {
        templateUrl: 'partials/artes/atividade01/pintores_brasileiros.html',
        controller: 'PintoresBrasileirosController'
    });

    $routeProvider.when('/artes/atividade01/rupestre', {
        templateUrl: 'partials/artes/atividade01/arte_rupestre.html',
        controller: 'ArteRupestreController'
    });

    $routeProvider.when('/artes/atividade01/gotico', {
        templateUrl: 'partials/artes/atividade01/arte_gotica.html',
        controller: 'ArteGoticaController'
    });

    // História

    $routeProvider.when('/historia', {
        templateUrl: 'partials/historia/inicio.html'
    });

    $routeProvider.when('/historia/atividade01', {
        templateUrl: 'partials/historia/atividade01/inicio.html'
    });

    $routeProvider.when('/historia/atividade01/igreja', {
        templateUrl: 'partials/historia/atividade01/igreja_matriz.html'
    });

    $routeProvider.when('/historia/atividade01/lagoa', {
        templateUrl: 'partials/historia/atividade01/lagoa.html'
    });

    $routeProvider.when('/historia/atividade01/india', {
        templateUrl: 'partials/historia/atividade01/india.html'
    });


    // Português

    $routeProvider.when('/portugues', {
        templateUrl: 'partials/portugues/inicio.html'
    });

    $routeProvider.when('/portugues/atividade01', {
        templateUrl: 'partials/portugues/atividade01/inicio.html'
    });

    $routeProvider.when('/portugues/atividade01/a', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraAController'
    });

    $routeProvider.when('/portugues/atividade01/b', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraBController'
    });

    $routeProvider.when('/portugues/atividade01/c', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraCController'
    });

    $routeProvider.when('/portugues/atividade01/d', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraDController'
    });

    $routeProvider.when('/portugues/atividade01/e', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraEController'
    });

    $routeProvider.when('/portugues/atividade01/f', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraFController'
    });

    $routeProvider.when('/portugues/atividade01/g', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraGController'
    });

    $routeProvider.when('/portugues/atividade01/h', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraHController'
    });

    $routeProvider.when('/portugues/atividade01/i', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraIController'
    });
    $routeProvider.when('/portugues/atividade01/j', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraJController'
    });

    $routeProvider.when('/portugues/atividade01/k', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraKController'
    });

    $routeProvider.when('/portugues/atividade01/l', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraLController'
    });

    $routeProvider.when('/portugues/atividade01/m', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraMController'
    });

    $routeProvider.when('/portugues/atividade01/n', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraNController'
    });

    $routeProvider.when('/portugues/atividade01/o', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraOController'
    });

    $routeProvider.when('/portugues/atividade01/p', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraPController'
    });

    $routeProvider.when('/portugues/atividade01/q', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraQController'
    });

    $routeProvider.when('/portugues/atividade01/r', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraRController'
    });

    $routeProvider.when('/portugues/atividade01/s', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraSController'
    });

    $routeProvider.when('/portugues/atividade01/t', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraTController'
    });

    $routeProvider.when('/portugues/atividade01/u', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraUController'
    });

    $routeProvider.when('/portugues/atividade01/v', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraVController'
    });

    $routeProvider.when('/portugues/atividade01/w', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraWController'
    });

    $routeProvider.when('/portugues/atividade01/x', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraXController'
    });

    $routeProvider.when('/portugues/atividade01/y', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraYController'
    });

    $routeProvider.when('/portugues/atividade01/z', {
        templateUrl: 'partials/portugues/atividade01/atividade.html',
        controller: 'LetraZController'
    });


    // Matemática

    $routeProvider.when('/matematica', {
        templateUrl: 'partials/matematica/inicio.html'
    });

    $routeProvider.when('/matematica/atividade01', {
        templateUrl: 'partials/matematica/atividade01/inicio.html'
    });

    $routeProvider.when('/matematica/atividade01/:forma', {
        templateUrl: 'partials/matematica/atividade01/atividade.html',
        controller: 'FormaGeometricaController'
    });

});