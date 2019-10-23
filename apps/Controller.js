(function (angular){
    'use strict'
    angular.module("MyController",[])
    .Controller("MyController", function($scope, $http){
        $scope.Data = [];
        $scope.Init = funciton(){
            var Url = "http://localhost/Database/Codeigniter/Mahasiswa/Panggil";
            $http({
                method:"get",
                url: Url
            }).then(function(response){
                $scope.Data = resonse.data;
            }, function(error){
                alert(error.nessage);
            });
        }
    });
})(window.angular);