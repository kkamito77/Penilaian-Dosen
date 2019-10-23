var app = angular.module("MyApp", []);

app.controller("MyController", function ($scope){
    $scope.Judul1 = "My First";
    $scope.Paragraph = "Aritmatika menggunakan js";
    $scope.Angka1 = 0;
    $scope.Angka2 = 0;
    $scope.Hitung = function(){
        alert( parseInt ($scope.Angka1)  + parseInt ($scope.Angka2));
    }

    $scope.kurang = function(){
        alert( parseInt ($scope.Angka1)  - parseInt ($scope.Angka2));
    }

    $scope.kali = function(){
        alert( parseInt ($scope.Angka1)  * parseInt ($scope.Angka2));
    }

    $scope.bagi = function(){
        alert( parseInt ($scope.Angka1)  / parseInt ($scope.Angka2));
    }

    $scope.sisa = function(){
        alert( parseInt ($scope.Angka1)  / parseInt ($scope.Angka2));
    }
});