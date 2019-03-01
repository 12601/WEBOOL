var app = angular.module('webool');
app.controller('LetraNController', function ($scope) {

    $scope.imagemLetra = 'nn.png';
    $scope.imagemPalavra = 'navio.png';
    $scope.palavra = 'NAVIO';
    $scope.letras = [];
    $scope.titulo = 'Letra N';
    $scope.indices = Array.from(Array($scope.palavra.length).keys());

    $scope.verificarLetra = function (letra) {
        if (letra === 1) {
            if ($scope.letras[0] != 'N' && $scope.letras[0] != 'n') {
                $scope.letras[0] = '';
            } else {
                document.getElementById('letra2').focus();
            }
        } else if (letra === 2) {
            if ($scope.letras[1] != 'A' && $scope.letras[1] != 'a') {
                $scope.letras[1] = '';
            } else {
                document.getElementById('letra3').focus();
            }
        } else if (letra === 3) {
            if ($scope.letras[2] != 'V' && $scope.letras[2] != 'v') {
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
            if ($scope.letras[4] != 'O' && $scope.letras[4] != 'o') {
                $scope.letras[4] = '';
            } else {
                location.href = "#!/portugues/atividade01/o";
            }
        }
    };

    // Garante o foco na primeira letra
    angular.element(document).ready(function () {
        document.getElementById('letra1').focus();
    });
});