//This module is called when the page is loaded (index.html), in this example
//the ngRoute module routes your application to different pages without reloading the entire application.
//app.js file, add a dependency on the ui-router to our main angular module.

var app = angular.module('MyYoutubeKids', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("home");
    $stateProvider.state("home",{
        url:"/home",
        templateUrl:"pages/home.html"
    });
});
