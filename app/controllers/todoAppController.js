var myApp = angular.module('myTodoApp', []);

	myApp.controller("TodoCtrl", function ($scope) {
	  
		$scope.todos = [
		    {text: 'Learn Sketch', status: false},
		    {text: 'Look at Dribbble and feel inferior', status: false},
		    {text: 'Actually learn how to use the Pen tool', status: false}
	  	];

	  	$scope.done = function(todo) {
		    todo.status = true;
		  };

		  $scope.remove = function(todo) {
		    var indexOf = $scope.todos.indexOf(todo);
		    if (indexOf !== -1) {
		      $scope.todos.splice(indexOf, 1);
		    }
		  };

		  $scope.pending = function(todo) {
		    todo.status = false;
		  };
		  
		   $scope.add = function(e) {
		    if (e.which && e.which === 13) {
		      $scope.todos.unshift({text: $scope.newTodo, status: false});
		      $scope.newTodo = '';
		    }
		  };

	});