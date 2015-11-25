//This controller is responsible for saving new comments to firebase db
empApp.controller('newCtrl', function($scope, $route, $firebaseArray, $timeout){

    var ref = new Firebase("https://vivid-inferno-7501.firebaseio.com/comments");
    $scope.comments = $firebaseArray(ref);

    $scope.addNewComment = function() {
        $scope.comments.$add({
            name: $scope.name,
            text: $scope.comment
        });

        $scope.notification = "Thank you, comment is saved!!!";
        $scope.name = undefined;
        $scope.comment = undefined;
        $timeout(function() {
            $scope.notification = undefined;
        }, 3000);
    };

});

