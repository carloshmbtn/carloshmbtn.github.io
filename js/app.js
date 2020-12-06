var app = angular.module('app', []);

app.controller('appController', ['$scope', function($scope){
    var anime1 = document.getElementById('anime1');
    var anime2 = document.getElementById('anime2');
    
    $scope.anime1 = function(){
        setTimeout(function () {
            anime2.style.display="none";
            anime1.style.display="block";
            $scope.anime2();
        }, 1000);
    }
    $scope.anime2 = function(){
        setTimeout(function () {
            anime1.style.display="none";
            anime2.style.display="block";
            $scope.anime1();
        }, 1000);
    }
    $scope.anime1();
}]);
