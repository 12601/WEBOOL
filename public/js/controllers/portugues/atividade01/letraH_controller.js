var app = angular.module('webool');
app.controller('LetraHController', function ($scope) {

    $scope.imagemLetra = 'hh';
    $scope.imagemPalavra = 'higiene';
    $scope.palavra = 'HIGIENE';
    $scope.letras = [];
    $scope.titulo = 'Letra H';
    $scope.letra = 'h';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'H' && $scope.letras[0] != 'h') {
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
            if ($scope.letras[2] != 'G' && $scope.letras[2] != 'g') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'I' && $scope.letras[3] != 'i') {
                $scope.letras[3] = '';
            } else {
                document.getElementById('letra5').focus();
            }
        } else if (letra === 5) {
            if ($scope.letras[4] != 'E' && $scope.letras[4] != 'e') {
                $scope.letras[4] = '';
            } else {
                document.getElementById('letra6').focus();
            }
        } else if (letra === 6) {
            if ($scope.letras[5] != 'N' && $scope.letras[5] != 'n') {
                $scope.letras[5] = '';
            } else {
                document.getElementById('letra7').focus();
            }
        } else if (letra === 7) {
            if ($scope.letras[6] != 'E' && $scope.letras[6] != 'e') {
                $scope.letras[6] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/i";
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});