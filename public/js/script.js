var app = angular.module('main', ['ngTable']).
        controller('DemoCtrl', function($scope, ngTableParams,$http) {
            
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

//            var data = [{name: "Moroni", age: 50},
//                {name: "Tiancum", age: 43},
//                {name: "Jacob", age: 27},
//                {name: "Nephi", age: 29},
//                {name: "Enos", age: 34},
//                {name: "Tiancum", age: 43},
//                {name: "Jacob", age: 27},
//                {name: "Nephi", age: 29},
//                {name: "Enos", age: 34},
//                {name: "Tiancum", age: 43},
//                {name: "Jacob", age: 27},
//                {name: "Nephi", age: 29},
//                {name: "Enos", age: 34},
//                {name: "Tiancum", age: 43},
//                {name: "Jacob", age: 27},
//                {name: "Nephi", age: 29},
//                {name: "Enos", age: 34}];

        });

function Ctrl($scope) {
  $scope.list = [];
  $scope.text = 'hello';
  $scope.submit = function() {
    if (this.text) {
      this.list.push(this.text);
      this.text = '';
    }
  };
}

app.value('$strapConfig', {
  datepicker: {
    language: 'fr',
    format: 'M d, yyyy'
  }
});

$('.datepicker').datepicker();