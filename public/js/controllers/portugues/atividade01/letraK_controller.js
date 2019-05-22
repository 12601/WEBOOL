var app = angular.module('webool');
app.controller('LetraKController', function ($scope) {

    $scope.imagemLetra = 'Kk';
    $scope.imagemPalavra = 'kiwi';
    $scope.palavra = 'KIWI';
    $scope.letras = [];
    $scope.titulo = 'Letra K';
    $scope.letra = 'k';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'K' && $scope.letras[0] != 'k') {
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
            if ($scope.letras[2] != 'W' && $scope.letras[2] != 'w') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'I' && $scope.letras[3] != 'i') {
                $scope.letras[3] = '';
            }
        }
    };

    $scope.irParaProximaPagina = function () {
        location.href = "#!/portugues/atividade01/l";
    };
    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});