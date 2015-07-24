angular.module('megaVideoExample', [])
  .directive('megaVideo', ['$sce',function($sce){
  return {
    restrict: "E",
    templateUrl: "megaVideo.html",
    scope: true,
    link: function($scope, $element, $attrs){
      var playerElement = $element.find('video'),
        playerObject = playerElement[0],
        playing = false;

        $scope.height = $attrs.height;
        $scope.width = $attrs.width;
        $scope.sources = $scope.$eval($attrs.sources);

        $element.on('click', function(){
          if(playing){
            playerObject.pause();
            playing = false;
          }
          else {
            playerObject.play();
            playing = true;
          }
        });

        $element.on('dblclick', function(){
          playerObject.currentTime = 0;
        });
    }
  }
}]);