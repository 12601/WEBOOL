var app = angular.module('webool');
app.controller('LetraRController', function ($scope) {

    $scope.imagemLetra = 'rr';
    $scope.imagemPalavra = 'regua';
    $scope.palavra = 'RÉGUA';
    $scope.letras = [];
    $scope.titulo = 'Letra R';
    $scope.letra = 'r';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'R' && $scope.letras[0] != 'r') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'É' && $scope.letras[1] != 'é' && $scope.letras[1] != 'e' && $scope.letras[1] != 'E') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'G' && $scope.letras[2] != 'g') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'U' && $scope.letras[3] != 'u') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'A' && $scope.letras[4] != 'a') {
                $scope.letras[4] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/s";
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});