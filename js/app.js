angular
	.module('todoApp', ['ui.router'])
  .config(MainRouter);

function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "/",
    templateUrl: "home.html"
  });
}