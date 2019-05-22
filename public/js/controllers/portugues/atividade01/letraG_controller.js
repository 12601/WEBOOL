var app = angular.module('webool');
app.controller('LetraGController', function ($scope) {

    $scope.imagemLetra = 'gg';
    $scope.imagemPalavra = 'girafa';
    $scope.palavra = 'GIRAFA';
    $scope.letras = [];
    $scope.titulo = 'Letra G';
    $scope.letra = 'g';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'G' && $scope.letras[0] != 'g') {
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
            if ($scope.letras[2] != 'R' && $scope.letras[2] != 'r') {
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
            if ($scope.letras[4] != 'F' && $scope.letras[4] != 'f') {
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
        location.href = "#!/portugues/atividade01/h";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});