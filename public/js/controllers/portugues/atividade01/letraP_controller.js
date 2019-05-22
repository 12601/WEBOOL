var app = angular.module('webool');
app.controller('LetraPController', function ($scope) {

    $scope.imagemLetra = 'pp';
    $scope.imagemPalavra = 'porta';
    $scope.palavra = 'PORTA';
    $scope.letras = [];
    $scope.titulo = 'Letra P';
    $scope.letra = 'p';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'P' && $scope.letras[0] != 'p') {
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
            if ($scope.letras[2] != 'R' && $scope.letras[2] != 'r') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'T' && $scope.letras[3] != 't') {
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
        location.href = "#!/portugues/atividade01/q";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});