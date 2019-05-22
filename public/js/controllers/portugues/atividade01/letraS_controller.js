var app = angular.module('webool');
app.controller('LetraSController', function ($scope) {
    $scope.imagemLetra = 'ss';
    $scope.imagemPalavra = 'sorvete';
    $scope.palavra = 'SORVETE';
    $scope.letras = [];
    $scope.titulo = 'Letra S';
    $scope.letra = 's';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'S' && $scope.letras[0] != 's') {
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
            if ($scope.letras[3] != 'V' && $scope.letras[3] != 'v') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'e' && $scope.letras[4] != 'E') {
                $scope.letras[4] = '';
            } else {
                document.getElementById('letra6').focus();
            }
        } else if (letra === 6) {
            if ($scope.letras[5] != 'T' && $scope.letras[5] != 't') {
                $scope.letras[5] = '';
            } else {
                document.getElementById('letra7').focus();
            }
        } else if (letra === 7) {
            if ($scope.letras[6] != 'e' && $scope.letras[6] != 'E') {
                $scope.letras[6] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/t";
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});