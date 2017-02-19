
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
        urls: ["http://vip-icecast.538.lw.triple-it.nl/WEB13_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB15_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB19_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB23_MP3",
                "http://ascolta.radiogibson.net:8080/radiogibson.opus",
                "http://stream.radioreklama.bg/city_low.ogg",
                "http://theradio.cc:8000/trcc-stream.ogg",
                "http://streaming.radiodancefloor.it/live.vorbis",
                "http://vip-icecast.538.lw.triple-it.nl/WEB13_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB15_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB19_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB23_MP3",
                "http://ascolta.radiogibson.net:8080/radiogibson.opus",
                "http://stream.radioreklama.bg/city_low.ogg",
                "http://theradio.cc:8000/trcc-stream.ogg",
                "http://streaming.radiodancefloor.it/live.vorbis"]
      },
      {
        genreId: 2,
        genreName: "rock",
        urls: ["http://ascolta.radiogibson.net:8080/radiogibson.opus",
                "http://217.146.71.24/elmar.ogg",
                "http://streaming.radiodancefloor.it/live.vorbis",
                "http://vip-icecast.538.lw.triple-it.nl/WEB08_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB09_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB10_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB11_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB12_MP3",
                "http://ascolta.radiogibson.net:8080/radiogibson.opus",
                "http://217.146.71.24/elmar.ogg",
                "http://streaming.radiodancefloor.it/live.vorbis",
                "http://vip-icecast.538.lw.triple-it.nl/WEB08_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB09_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB10_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB11_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB12_MP3"]
      },
      {
        genreId: 3,
        genreName: "classical",
        urls: ["http://vip-icecast.538.lw.triple-it.nl/WEB14_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB18_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB21_MP3",
                "http://bitsmitter.com:8006/wsenam.ogg",
                "http://rondo.iradio.fi:8000/klasu.flac",
                "http://stream.xaok.org:8000/frs.ogg",
                "http://bitsmitter.com:8006/wsenam.ogg",
                "http://vip-icecast.538.lw.triple-it.nl/WEB14_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB18_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB21_MP3",
                "http://bitsmitter.com:8006/wsenam.ogg",
                "http://rondo.iradio.fi:8000/klasu.flac",
                "http://stream.xaok.org:8000/frs.ogg",
                "http://bitsmitter.com:8006/wsenam.ogg"]
      },
      {
        genreId: 4,
        genreName: "metal",
        urls: ["http://vip-icecast.538.lw.triple-it.nl/WEB16_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB17_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB20_MP3",
                "http://74.116.40.19:8006/blastogg.opus",
                "http://friends-of-radius.ethz.ch/kohina.ogg",
                "http://icecast.eu-a.live.streaminginter.net:8000/ecc/vorbis_hq.ogg",
                "http://vip-icecast.538.lw.triple-it.nl/WEB16_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB17_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB20_MP3",
                "http://74.116.40.19:8006/blastogg.opus",
                "http://friends-of-radius.ethz.ch/kohina.ogg",
                "http://icecast.eu-a.live.streaminginter.net:8000/ecc/vorbis_hq.ogg"]
      },
      {
        genreId: 5,
        genreName: "country",
        urls: ["http://vip-icecast.538.lw.triple-it.nl/WEB22_MP3",
                "http://alex-radio.rosebud-media.de:8000/alex-radio-low.ogg",
                "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB08_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB09_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB10_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB11_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB12_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB22_MP3",
                "http://alex-radio.rosebud-media.de:8000/alex-radio-low.ogg",
                "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB08_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB09_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB10_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB11_MP3",
                "http://vip-icecast.538.lw.triple-it.nl/WEB12_MP3"]
      },
      {
        genreId: 6,
        genreName: "techno",
        urls: []
      },
      {
        genreId: 7,
        genreName: "Rhythm and Blues",
        urls: []
      },
      {
        genreId: 8,
        genreName: "reggae",
        urls: []
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
