var mod = angular.module('main', ['ngTable']);
var app = mod.
        controller('DemoCtrl', function($scope, ngTableParams, $http) {

            $http({method: 'GET', url: '/ZendSkeletonApplication/public/todo/list'}).
                    success(function(data, status, headers, config) {
                        $scope.tableParams = new ngTableParams({
                            page: 1, // show first page
                            count: 10           // count per page
                        }, {
                            total: data.length, // length of data
                            getData: function($defer, params) {
                                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                            }
                        });
                    }).
                    error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });


        });

mod.controller("newTodoCtrl", function($scope, $http, $location) {
    $scope.tache = null;
    $scope.tache_date = null;
    $scope.createTodo = function() {
        var data = {tache: $scope.tache, data_tache: $scope.tache_date};
        $http.post('/ZendSkeletonApplication/public/todo/add', data).success(function() {
            alert("todo added");
//            $location.path('/ZendSkeletonApplication/public/todo/index');
        });
    };
});