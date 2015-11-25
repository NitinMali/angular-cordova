//This controller for displaying comments from firebase
empApp.controller('mainCtrl', function($scope, $route, $firebaseArray){

    //Test comment before downloading from firebase
    $scope.comments = [{text: 'Welcome to HTML5, Angular & Phonegap', name: 'Downloading comments from firebase'}];
    //Connecting to firebase
    var ref = new Firebase("https://vivid-inferno-7501.firebaseio.com/comments");
    $scope.comments = $firebaseArray(ref);

});

