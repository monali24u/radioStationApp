angular.module('radioApp')
    .controller('radioController', radioCntlFunction)
    .controller('radioPlayerController', radioPlayerFunction);

// inject all of our dependencies into this controller
radioCntlFunction.$inject = ['radioFactory', 'sharedRadioData']

// we pass all of our injected dependencies in as arguments
function radioCntlFunction(radioFactory, sharedRadioData) {
    var rCtrl = this;  // we could use $scope instead if we wanted to

    // quick check to make sure our controller is loading.
    console.log('radioController loaded');

    //Get the allstation from Database
    rCtrl.getallstations = function (event) {
      console.log('getallstation called');
      var postPromise = radioFactory.getallstations();
       postPromise.then(
           function (data) {
               var arr = data["data"];
               sharedRadioData.setAllStations(arr);
               rCtrl.allradios =  arr;
          },
          function (err) {
              console.log('Station not found:', err)
           }
       )
    }

    //Get the allgenre from Database
    rCtrl.getallgenres = function (event) {
      console.log('getallgenres called');
      var postPromise = radioFactory.getallgenres();
       postPromise.then(
           function (data) {
              var arr = data["data"];
              rCtrl.genres =  arr;
          },
          function (err) {
              console.log('Station not found:', err)
           }
       )
    }

    //Get the genere page and fill it
    rCtrl.getgenrespage = function (event) {
      console.log('getgenrepage called');
      window.location.href = '../html/genrelist.html'
    }

    //Get the station from Database
    rCtrl.getstation = function (event) {
      console.log('getstation called');
      var postPromise = radioFactory.getstation();
       postPromise.then(
           function (data) {
               sharedRadioData.setStation(data["data"]);
          },
          function (err) {
              console.log('Station not found:', err)
           }
       )
    }

    //on click of radio from the list
    rCtrl.setCurrentRadio = function (station, index, length) {
    sharedRadioData.setStation(station);
    sharedRadioData.setPlay(index, length);
    }

    //on click of genre from the list
    rCtrl.setCurrentGenre = function (genre) {
    console.log(genre);
    console.log('setCurrentGenre called');
    var postPromise = radioFactory.getgenreurls(genre);
     postPromise.then(
         function (data) {
              var arr = data["data"];
             rCtrl.genreradios =  arr;
             sharedRadioData.setGenre(genre);
        },
        function (err) {
            console.log('Station not found:', err)
         }
     )
    }

    window.onload = function() {
			 	rCtrl.getallgenres(event);
			};

    rCtrl.getCurrentGenre = function() {
        return sharedRadioData.getGenre();
      };

    rCtrl.getPlayStatus = function(index){
           return sharedRadioData.getPlay(index);
      };

}


//Second controller// we pass all of our injected dependencies in as arguments
function radioPlayerFunction(sharedRadioData, $sce) {
    var rCtrl = this;  // we could use $scope instead if we wanted to

    // quick check to make sure our controller is loading.
    console.log('radioPlayerController loaded');

    rCtrl.getAudioUrl = function() {
      return $sce.trustAsResourceUrl(sharedRadioData.getStation());
    };

    rCtrl.getAudioUrls = function() {
      var stations = sharedRadioData.getAllStations();
      return $sce.trustAsResourceUrl(stations[2]);
    };
}
