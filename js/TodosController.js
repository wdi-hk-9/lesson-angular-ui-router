angular
  .module("todoApp")
  .controller("TodosController", ["$scope", function TodosController($scope){

    $scope.todoList = [
      {task: "build an awesome todo app", done: false},
      {task: "get super good at Angular", done: false},
      {task: "party on code", done: false},
      {task: "tackle the bonus challenges for this lesson", done: false},
      {task: "take a nap", done: false}
    ];

    $scope.addTodo = addTodo;
    $scope.deleteTodo = deleteTodo;
    $scope.completedTodos = completedTodos;
    $scope.remainingTodos = remainingTodos;

    //function that allows us to add new todos to our todoList
    function addTodo(){
      $scope.todoList.push({task: $scope.text, done: false});
      $scope.text = null;
    }

    //function that allows us to delete specific todos from our todoList
    function deleteTodo($index){
      $scope.todoList.splice($index, 1);
    }

    //returns a count of the tasks that have been marked as done
    function completedTodos(){
      return $scope.todoList.filter(function(x){ return x.done === true; });
    }

    //returns a count of the tasks that have not been marked as done
    function remainingTodos(){
      return $scope.todoList.filter(function(x){ return x.done === false; });
    }

  }]);
