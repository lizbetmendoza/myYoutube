//New custom directive 'Search', I used a expernal page search.html
//When user types the search criteria, it will connect the controller and call the YouTube API v3
//to fetch the videos
(function(){
    app.directive("search",function(){
        return{
            templateUrl:"pages/search.html",
            link:function(scope,elem,attrs){
            }
        }
    });
})();
