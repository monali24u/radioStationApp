
var express = require('express');
var routes = require('./routes');
var user = require('./routes/stations');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/mongo');
}

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});


app.get('/users', function(req, res) {
  mongoose.model('users').find(function(err, users) {
    res.send(users);
  });
});

app.get('/posts/:userId', function(req, res) {
  mongoose.model('posts').find({user: req.params.userId}, function(err, posts) {
    mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts) {
      res.send(posts);
    });
  });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});




//
// function createStations(arry){
//   for(var i=0; i<arry.length; i++){
//     var newAnimals = new stations(arry[i]);
//     newAnimals.save();
//   }
//
// }
//
// var stationsArray = [
//   {
//     url:"http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3"
//   },
//   {
//     url:"http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3"
//   },
//   {
//     url:"http://http-live.sr.se/p3-mp3-192"
//   },
//   {
//     url:"http://vip-icecast.538.lw.triple-it.nl:80/WEB06_MP3"
//   },
//   {
//     url:"http://vip-icecast.538.lw.triple-it.nl:80/WEB05_MP3"
//   }
// ];
//
// createStations(stationsArray);

// //query that finds all users with a given favorite animal in their list.
// Visitors.find({favoriteAnimals: 'tiger'}, function(err, people){
//     if(err){
//       console.log("could not find Visitors.favoriteAnimals: ", err);
//     }
//     else{
//       console.log(people);
//     }
// })
//
// //query that adds an animals to a visitor's favorite animal list.
// Visitors.update({name: 'sean'},{ $push: { favoriteAnimals: 'deer' } }, function(err, people){
//     if(err){
//       console.log("could not find Visitors: ", err);
//     }
//     else{
//       var arry =
//       console.log(people);
//     }
// })
