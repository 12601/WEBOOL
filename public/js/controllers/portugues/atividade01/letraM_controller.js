var app = angular.module('webool');
app.controller('LetraMController', function ($scope) {

    $scope.imagemLetra = 'mm';
    $scope.imagemPalavra = 'melancia';
    $scope.palavra = 'MELANCIA';
    $scope.letras = [];
    $scope.titulo = 'Letra M';
    $scope.letra = 'm';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'M' && $scope.letras[0] != 'm') {
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
            if ($scope.letras[2] != 'L' && $scope.letras[2] != 'l') {
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
            if ($scope.letras[5] != 'C' && $scope.letras[5] != 'c') {
                $scope.letras[5] = '';
            } else {
                document.getElementById('letra7').focus();
            }
        } else if (letra === 7) {
            if ($scope.letras[6] != 'I' && $scope.letras[6] != 'i') {
                $scope.letras[6] = '';
            } else {
                document.getElementById('letra8').focus();
            }
        } else if (letra === 8) {
            if ($scope.letras[7] != 'A' && $scope.letras[7] != 'a') {
                $scope.letras[7] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/n";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});