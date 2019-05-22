var app = angular.module('webool');
app.controller('LetraEController', function ($scope) {

    $scope.imagemLetra = 'ee';
    $scope.imagemPalavra = 'escova';
    $scope.palavra = 'ESCOVA';
    $scope.letras = [];
    $scope.titulo = 'Letra E';
    $scope.letra = 'e';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'E' && $scope.letras[0] != 'e') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'S' && $scope.letras[1] != 's') {
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
            if ($scope.letras[3] != 'O' && $scope.letras[3] != 'o') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'V' && $scope.letras[4] != 'v') {
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
        location.href = "#!/portugues/atividade01/f";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});