var app = angular.module('webool');
app.controller('LetraVController', function ($scope) {

    $scope.imagemLetra = 'vv';
    $scope.imagemPalavra = 'violao';
    $scope.palavra = 'VIOLÃO';
    $scope.letras = [];
    $scope.titulo = 'Letra V';
    $scope.letra = 'v';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'V' && $scope.letras[0] != 'v') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'I' && $scope.letras[1] != 'i') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'O' && $scope.letras[2] != 'o') {
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
            if ($scope.letras[4] != 'a' && $scope.letras[4] != 'A' && $scope.letras[4] != 'Ã' && $scope.letras[4] != 'ã') {
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
        location.href = "#!/portugues/atividade01/x";
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});