var app = angular.module('webool');
app.controller('LetraDController', function ($scope) {

    $scope.imagemLetra = 'dd';
    $scope.imagemPalavra = 'domino';
    $scope.palavra = 'DOMINÓ';
    $scope.letras = [];
    $scope.titulo = 'Letra D';
    $scope.letra = 'd';

    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'D' && $scope.letras[0] != 'd') {
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
            if ($scope.letras[2] != 'M' && $scope.letras[2] != 'm') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'i' && $scope.letras[3] != 'I') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'N' && $scope.letras[4] != 'n') {
                $scope.letras[4] = '';
            } else {
                document.getElementById('letra6').focus();
            }
        } else if (letra === 6) {
            if ($scope.letras[5] != 'O' && $scope.letras[5] != 'o' && $scope.letras[5] != 'ó' && $scope.letras[5] != 'Ó') {
                $scope.letras[5] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/e";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});