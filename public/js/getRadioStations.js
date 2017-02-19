
// // Get your api key from 'https://dirble.com/developer/'
// const dirble = require('dirble')('c065b9bc2af0c9df844028b6a9')
//
//
// dirble.getStations(0,20,0)
// .then( (response) => {
//   // Parse JSON response
//   console.log(response);
// })



var unirest = require('unirest');
console.log('radioStation is up!!');

var station = "http://http-live.sr.se/p3-mp3-192";

function getRadioStationData(){
// var urlForSingleStation = "http://api.dirble.com/v2/station/10?token=c065b9bc2af0c9df844028b6a9"
var urlForSingleStation = "http://api.shoutcast.com/legacy/Top500?k=ytBraV3BiMBIOGV4"

unirest.get(urlForSingleStation)
       .end(function(response, err){
          if(err){
            console.log("ERROR : radioStation ", err);
          }
          else{
               var streamData = response.body;
              console.log(response.body);
              // radioStationDatabase.write(JSON.stringify(streamData[0].stream) + "\n");
          }
    });
}
 getRadioStationData();



 // exports.getRadioStationData = getRadioStationData;
 // exports.station = station;
 var apiKey = 'ytBraV3BiMBIOGV4';
 //
 // let ShoutcastAPI = require('node-shoutcast-api')
 // let api = new ShoutcastAPI(apiKey, 'json')
 //
 // api.getStationsByGenre({
 //     limit: [1,2],
 //     genre: 'metal',
 //     success: function(res) {
 //         console.log('--------')
 //         console.log(' By genre')
 //         console.log('--------')
 //         console.log(JSON.stringify(res))
 //
 //         for (let i=0,len=res.stationlist.station.length; i<len; i++) {
 //             let playlist = api.getPlaylistUrlByStationId(res.stationlist.tunein.base, res.stationlist.station[i].id)
 //             console.log(playlist)
 //         }
 //     },
 //     error: function(err) {
 //         console.log(err)
 //     }
 // })

 // var ShoutcastAPI = require('node-shoutcast-api')
 // var api = new ShoutcastAPI(apiKey, 'json')
 //
 // api.getTop500Stations({
 //     limit: 5,
 //     bitRate: api.BITRATE_32,
 //     mediaType: api.MEDIATYPE_AAC,
 //     success: function(res) {
 //         console.log('--------')
 //         console.log(' Top 500')
 //         console.log('--------')
 //         console.log(JSON.stringify(res))
 //
 //         for (var i=0, len=res.stationlist.station.length; i<len; i++) {
 //             var playlist = api.getPlaylistUrlByStationId(res.stationlist.tunein.base, res.stationlist.station[i].id)
 //             console.log(playlist)
 //         }
 //     },
 //     error: function(err) {
 //         console.log(err)
 //     }
 // })
