var app = angular.module('webool');
app.controller('LetraOController', function ($scope) {

    $scope.imagemLetra = 'oo';
    $scope.imagemPalavra = 'oculos';
    $scope.palavra = 'ÓCULOS';
    $scope.letras = [];
    $scope.titulo = 'Letra O';
    $scope.letra = 'o';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'Ó' && $scope.letras[0] != 'ó' && $scope.letras[0] != 'O' && $scope.letras[0] != 'o') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'c' && $scope.letras[1] != '  C') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'U' && $scope.letras[2] != 'u') {
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
            if ($scope.letras[4] != 'O' && $scope.letras[4] != 'o') {
                $scope.letras[4] = '';
            } else {
                document.getElementById('letra6').focus();
            }
        } else if (letra === 6) {
            if ($scope.letras[5] != 'S' && $scope.letras[5] != 's') {
                $scope.letras[5] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/p";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});