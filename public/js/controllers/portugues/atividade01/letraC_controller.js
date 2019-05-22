var app = angular.module('webool');
app.controller('LetraCController', function ($scope, $route) {

    $scope.imagemLetra = 'cc';
    $scope.imagemPalavra = 'coelho';
    $scope.palavra = 'COELHO';
    $scope.letras = [];
    $scope.titulo = 'Letra C';
    $scope.letra = 'c';

    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'C' && $scope.letras[0] != 'c') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'O' && $scope.letras[1] != 'o') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'E' && $scope.letras[2] != 'e') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'L' && $scope.letras[3] != 'l') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'H' && $scope.letras[4] != 'h') {
                $scope.letras[4] = '';
            } else {
                document.getElementById('letra6').focus();
            }
        } else if (letra === 6) {
            if ($scope.letras[5] != 'O' && $scope.letras[5] != 'o') {
                $scope.letras[5] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/d";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });

});