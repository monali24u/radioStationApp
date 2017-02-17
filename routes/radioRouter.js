var radioStorage = require('../models/radioDBSchema.js');

module.exports = function (app) {
    // make sure we are loading this router
    console.log("Router loaded")

    // Root Route
    app.get('/', function (req, res) {
        // sendFile uses a PATH, not a URL
        res.sendFile('index.html', { root: './public/html' });
    }),

    // GET: /stations  - get all aliens
    app.get('/stations', function (req, res) {
        radioStorage.find({}, function (err, stationsArray) {
            if (err) {
                console.log("Database find() error:", err);
                // send back a server error
                res.status(500).json(err)
            } else {

              var stations, fLen;
              stations = ["http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP31",
                          "http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP32",
                          "http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3",
                          "http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP34"];
              res.send(stations);
            }
        })
    }),

    // GET: /station  - get all aliens
    app.get('/station', function (req, res) {
        radioStorage.find({}, function (err, stationsArray) {
            if (err) {
                console.log("Database find() error:", err);
                // send back a server error
                res.status(500).json(err)
            } else {
                var station = "http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3";
                res.send(station);
            }
        })
    }),

    app.post('/oneStation', function(req, res) {
        console.log("saving", req.body)
        // take our req.body object and use it to create a aliensStorage model
        var newStation = new radioStorage(req.body);
        // then we can use the save() method on the model to save it to Mongo
        newStation.save(function(err){
            if (err) {
                console.log("Database insert() error:", err);
                // send back a server error
                res.status(500).json(err)
            } else {
                res.send(req.body);
            }
        })
    })
}
