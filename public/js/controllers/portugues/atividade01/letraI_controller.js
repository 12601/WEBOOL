var app = angular.module('webool');
app.controller('LetraIController', function ($scope) {

    $scope.imagemLetra = 'ii';
    $scope.imagemPalavra = 'igreja';
    $scope.palavra = 'IGREJA';
    $scope.letras = [];
    $scope.titulo = 'Letra I';
    $scope.letra = 'i';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'I' && $scope.letras[0] != 'i') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'g' && $scope.letras[1] != 'G') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'r' && $scope.letras[2] != 'R') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'E' && $scope.letras[3] != 'e') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'J' && $scope.letras[4] != 'j') {
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
        location.href = "#!/portugues/atividade01/j";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});