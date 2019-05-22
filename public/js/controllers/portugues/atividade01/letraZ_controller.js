var app = angular.module('webool');
app.controller('LetraZController', function ($scope) {

    $scope.imagemLetra = 'zz';
    $scope.imagemPalavra = 'zebra';
    $scope.palavra = 'ZEBRA';
    $scope.letras = [];
    $scope.titulo = 'Letra Z';
    $scope.letra = 'z';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'Z' && $scope.letras[0] != 'z') {
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
            if ($scope.letras[2] != 'b' && $scope.letras[2] != 'B') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'R' && $scope.letras[3] != 'r') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'a' && $scope.letras[4] != 'A') {
                $scope.letras[4] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});