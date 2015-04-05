angular.module('starter.controllers', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends, Camera) {
  $scope.friends = Friends.all();
  $scope.getPhoto = function() {
    console.log('Getting camera');
    Camera.getPicture({
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    }).then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    });
    /*
    navigator.camera.getPicture(function(imageURI) {
      console.log(imageURI);
    }, function(err) {
    }, { 
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
    });
    */
  }
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
