
// This is a DUMMY CONTROLLER, used to demonstrate how the
// coders.js model file might be used by an application's express controller/router handler.
// This is NOT the way we would really write a controller.
var Radios = require('../../models/radioDBSchema.js')

function makeRadio() {
    // we are hard-coding this object as if this was the POST request.body
    var reqBodyObject = [
      {
        genreId: 1,
        genreName: "pop",
        urls: ["http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
               "http://http-live.sr.se/p3-mp3-192",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB05_MP3"]
      },
      {
        genreId: 2,
        genreName: "rock",
        urls: ["http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
               "http://http-live.sr.se/p3-mp3-192",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB05_MP3"]
      },
      {
        genreId: 3,
        genreName: "classical",
        urls: ["http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
               "http://http-live.sr.se/p3-mp3-192",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB05_MP3"]
      },
      {
        genreId: 4,
        genreName: "metal",
        urls: ["http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
               "http://http-live.sr.se/p3-mp3-192",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB05_MP3"]
      },
      {
        genreId: 5,
        genreName: "country",
        urls: ["http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
               "http://http-live.sr.se/p3-mp3-192",
               "http://vip-icecast.538.lw.triple-it.nl:80/WEB05_MP3"]
      }

      ];

    // we call the makeRadio() method on the model and it will return a promise
    // which we can look at to see if the save() method completed successfully or not.


    // Radios.makeRadio(reqBodyObject)
    //     .then(function(data){
    //         console.log("makeRadio() Succeeded:", data)
    //         console.log("SUCCESS " + data.genreId + " was added")
    //     })
    //     .catch(function (data) {
    //         console.log("makeRadio() Failed:", data)
    //         console.log("ERROR" + data.errmsg)
    //     })

    Radios.createRadios(reqBodyObject);

}

module.exports = {
    makeradio: makeRadio
}
