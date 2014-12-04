angular.module('app', ['ngRoute'])

    //---------------
    // Services
    //---------------

    .factory('Todos', function () {
        return $http.get('/todos');
    })

    //---------------
    // Controllers
    //---------------

    //.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
    //    $scope.todos = Todos;
    //}])

    // Using DB
    .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
        Todos.success(function (data) {
            $scope.todos = data;
        }).error(function(data, status) {
            console.log(data, status);
            $scope.todos = [];
        });
    }])

    .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
        $scope.todo = Todos[$routeParams.id];
    }])

    //---------------
    // Routes
    //---------------

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/todos.html',
                controller: 'TodoController'
            })

            .when('/:id', {
                templateUrl: '/todoDetails.html',
                controller: 'TodoDetailCtrl'
            });
    }]);