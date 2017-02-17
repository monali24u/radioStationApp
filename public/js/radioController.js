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

    // simple test variable to make sure our controller variables are accessible to the html
    rCtrl.title = 'This is Monali Radio Station!'

    // get our list of aliens from the aliens factory
    var getPromise = radioFactory.getallstations();
    getPromise.then(
        // promise.then(successFunction, errorFunction)
        // success function is the first parameter
        function (res) {
            rCtrl.stations = res.data;
        },
        // failure function is the second parameter of our 'then' promise function
        function (err) {
            console.log("getAllStations error:", err);
            rCtrl.stations = [];
        })

    // submit a new alien to be added to the list of aliens
    // we pass the event from which this function is called, but we aren't
    // really doing anything with the event.
    rCtrl.submit = function (event) {
        // take a look at what's in the event
        // console.log(event)
        // var newAlien = {}
        // var newAlien = aCtrl.alien
        var postPromise = aliensFactory.createstation(rCtrl.radio);
        postPromise.then(
            function (data) {
                console.log('createAlien worked')
                // we don't really need anything back from the server other than to
                // know if our request succeeded or failed.  So here we'll just add
                // the alien that we sent to our list of aliens
                rCtrl.stations.push(rCtrl.radio)
                // after adding, we set the alien to be an empty object to clear the input fields
                // in our input form
                rCtrl.radio = {}
            },
            function (err) {
                console.log('createAliens failed:', err)
            }
        )

    }

    //Get the station from Database
    rCtrl.getstation = function (event) {
      console.log('getstation called');
      var postPromise = radioFactory.getstation();
       postPromise.then(
           function (data) {
              // console.log(data)
              // we don't really need anything back from the server other than to
              // know if our request succeeded or failed.  So here we'll just add
              // the alien that we sent to our list of aliens
              //rCtrl.station.push(rCtrl.radio)
              // after adding, we set the alien to be an empty object to clear the input fields
              // in our input form
              // rCtrl.radio = 'http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3';
              // rCntl.url = 'http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3';
              //  rCtrl.radio = JSON.stringify(data["data"]);
               sharedRadioData.setProperty(data["data"]);
          },
          function (err) {
              console.log('Station not found:', err)
           }
       )
    }
}


//Second controller// we pass all of our injected dependencies in as arguments
function radioPlayerFunction(sharedRadioData, $sce) {
    var rCtrl = this;  // we could use $scope instead if we wanted to

    // quick check to make sure our controller is loading.
    console.log('radioPlayerController loaded');

    rCtrl.getAudioUrl = function() {
      return $sce.trustAsResourceUrl(sharedRadioData.getProperty());
    };



}
