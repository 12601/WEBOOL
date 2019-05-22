var app = angular.module('webool');
app.controller('LetraBController', function ($scope) {
    $scope.imagemLetra = 'bb';
    $scope.imagemPalavra = 'banana';
    $scope.palavra = 'BANANA';
    $scope.letras = [];
    $scope.titulo = 'Letra B';
    $scope.letra = 'b';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());


    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'B' && $scope.letras[0] != 'b') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'A' && $scope.letras[1] != 'a') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'N' && $scope.letras[2] != 'n') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'A' && $scope.letras[3] != 'a') {
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
            if ($scope.letras[5] != 'A' && $scope.letras[5] != 'a') {
                $scope.letras[5] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/c";
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});