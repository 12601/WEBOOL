var app = angular.module('webool');
app.controller('LetraAController', function ($scope) {
    $scope.imagemLetra = 'aa';
    $scope.imagemPalavra = 'arvore';
    $scope.palavra = 'ÁRVORE';
    $scope.letras = [];
    $scope.titulo = 'Letra A';
    $scope.letra = 'a';

    $scope.indices = Array.from(Array($scope.palavra.length).keys()); // [0, 1, 2, 3, 4, 5]
    // for i in [0, 1, 2, 3, 4, 5]

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'A' && $scope.letras[0] != 'a' && $scope.letras[0] != 'á' && $scope.letras[0] != 'Á') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'R' && $scope.letras[1] != 'r') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'v' && $scope.letras[2] != 'V') {
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
            if ($scope.letras[4] != 'r' && $scope.letras[4] != 'R') {
                $scope.letras[4] = '';
            } else {
                document.getElementById('letra6').focus();
            }
        } else if (letra === 6) {
            if ($scope.letras[5] != 'e' && $scope.letras[5] != 'E') {
                $scope.letras[5] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/b";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });

});