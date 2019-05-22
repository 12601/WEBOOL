var app = angular.module('webool');
app.controller('LetraXController', function ($scope) {

    $scope.imagemLetra = 'xx';
    $scope.imagemPalavra = 'xicara';
    $scope.palavra = 'XÍCARA';
    $scope.letras = [];
    $scope.titulo = 'Letra X';
    $scope.letra = 'x';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'X' && $scope.letras[0] != 'x') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'I' && $scope.letras[1] != 'i' && $scope.letras[1] != 'Í' && $scope.letras[1] != 'í') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'C' && $scope.letras[2] != 'c') {
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
            if ($scope.letras[4] != 'R' && $scope.letras[4] != 'r') {
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
        location.href = "#!/portugues/atividade01/z";
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});