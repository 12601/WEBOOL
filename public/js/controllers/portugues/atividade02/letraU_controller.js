var app = angular.module('webool');
app.controller('LetraUController', function ($scope) {

    $scope.imagemLetra = 'u';
    $scope.imagemPalavra = 'urso.png';
    $scope.palavra = 'URSO';
    $scope.letras = [];
    $scope.titulo = 'Letra U';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'u' && $scope.letras[0] != 'U') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'r' && $scope.letras[1] != 'R') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 's' && $scope.letras[2] != 'S') {
                $scope.letras[2] = '';
            } else {
                document.getElementById('letra4').focus();
            }
        } else if (letra === 4) {
            if ($scope.letras[3] != 'o' && $scope.letras[3] != 'O') {
                $scope.letras[3] = '';
            } else {
                location.href = "#!/portugues/atividade01/v";
            }
        }
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});