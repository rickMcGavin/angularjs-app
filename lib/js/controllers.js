// var artistControllers = angular.module('artistControllers', []);

// artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  
// 	$http.get('lib/js/data.json').then(function success(response) {
// 		$scope.artists = response.data;
// 		$scope.artistOrder = 'name';
// 	});  
// }]);

// artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  
// 	$http.get('lib/js/data.json').then(function success(response) {
// 		$scope.artists = response.data;
// 		$scope.whichItem = $routeParams.itemId;
// 	});  
// }]);

var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);

