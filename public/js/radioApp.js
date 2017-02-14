// Create the angular app that will be used by all of our controllers and factories
var app = angular.module('radioApp', [])

app.controller('radioCntl', function($scope, $http){
    $scope.stream = "http://http-live.sr.se/p3-mp3-192";
});

app.directive('embedSrc', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var current = element;
      scope.$watch(function() { return attrs.embedSrc; }, function () {
        var clone = element
                      .clone()
                      .attr('src', attrs.embedSrc);
        current.replaceWith(clone);
        current = clone;
      });
    }
  };
})
