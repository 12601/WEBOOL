var app = angular.module('webool');
app.controller('LetraTController', function ($scope) {
    $scope.imagemLetra = 'tt';
    $scope.imagemPalavra = 'tesoura';
    $scope.palavra = 'TESOURA';
    $scope.letras = [];
    $scope.titulo = 'Letra T';
    $scope.letra = 't';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'T' && $scope.letras[0] != 't') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'E' && $scope.letras[1] != 'e') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'S' && $scope.letras[2] != 's') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'O' && $scope.letras[3] != 'o') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'U' && $scope.letras[4] != 'u') {
                $scope.letras[4] = ''
            } else {
                document.getElementById('letra6').focus();
            }
        } else if (letra === 6) {
            if ($scope.letras[5] != 'R' && $scope.letras[5] != 'r') {
                $scope.letras[5] = '';
            } else {
                document.getElementById('letra7').focus();
            }
        } else if (letra === 7) {
            if ($scope.letras[6] != 'A' && $scope.letras[6] != 'a') {
                $scope.letras[6] = ''
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/u";
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});