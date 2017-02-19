// Create the angular app that will be used by all of our controllers and factories
// angular.module('radioApp', [])
angular.module('radioApp', [])
    .service('sharedRadioData', function () {
        var station = '';
        var stations = [];
        var genre = '';
        var play = [];
        return {
            getStation: function () {
                return station;
            },
            setStation: function(value) {
                station = value;
            },
            getAllStations: function () {
                return stations;
            },
            setAllStations: function(value) {
                stations = value;
            },
            getGenre: function () {
                return genre;
            },
            setGenre: function(value) {
                genre = value;
            },
            getPlay: function (index) {
                return play[index];
            },
            setPlay: function(index, length) {
              for (var i = 0; i < length; i++) {
                  play[i] = "";
              }
              for (var i = 0; i < length; i++) {
                if(i == index)
                {
                  play[i] = "  Playing...";
                }
                else
                  play[i] = "";
              }
            }
        };
    });
// var stationFile = require('./getRadioStations.js');

// app.controller('radioCntl', function($scope, $http){
//     $scope.stream = "http://http-live.sr.se/p3-mp3-192";
//     // $scope.stream = stationFile.station;
// });
//
// app.directive('embedSrc', function () {
//   return {
//     restrict: 'A',
//     link: function (scope, element, attrs) {
//       var current = element;
//       scope.$watch(function() { return attrs.embedSrc; }, function () {
//         var clone = element
//                       .clone()
//                       .attr('src', attrs.embedSrc);
//         current.replaceWith(clone);
//         current = clone;
//       });
//     }
//   };
// })
