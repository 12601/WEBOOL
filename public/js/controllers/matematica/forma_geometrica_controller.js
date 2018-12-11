var app = angular.module('webool');
app.controller('FormaGeometricaController', function ($scope, $routeParams) {
    $scope.formaGeometrica = $routeParams.forma;

    $scope.proximo = '#!/matematica/atividade01/';
    $scope.titulo = ''

    if ($scope.formaGeometrica === 'circulo') {
        $scope.proximo += 'quadrado';
        $scope.titulo = 'Círculo';
    } else if ($scope.formaGeometrica === 'quadrado') {
        $scope.proximo += 'retangulo';
        $scope.titulo = 'Quadrado';
    } else if ($scope.formaGeometrica === 'retangulo') {
        $scope.proximo += 'triangulo';
        $scope.titulo = 'Retângulo';
    } else {
        $scope.titulo = 'Triângulo';
    }
});