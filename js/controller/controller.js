//New controller to get Youtube List, that interact with YouTube API supports
//I use the $http service to request data from the server,
app.controller('youtubeCrtl', function($scope,$http,$filter) {
   //The controller creates two properties (variables) in the scope (youtubeList and youtubeSearch).
    $scope.youtubeList = [];
    $scope.youtubeSearch = "";
    $scope.getYoutubeList = function(searchTxt){
        $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                //API_KEY
                key: "AIzaSyBahF7YmvpZiMBziQXy21Uhe44URp2yPHE",
                type: 'video',
                part: 'id,snippet',
                fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                maxResults: '20',
                q: searchTxt
            }
        }).success( function (data) {
            if (data.items.length === 0) {
                $scope.youtubeList = 'something wrong...';
            }
            $scope.youtubeSearch = searchTxt;
            $scope.youtubeList = data.items;

        });
    };

    $scope.checkDataLength = function(data){
        return (data.length >=1);
    };

});
