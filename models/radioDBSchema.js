// This is our model file which will typically be required by controller(s) and used to
// access data from the database.
var mongoose = require('mongoose')
var assert = require('assert');

// default mongodb port is 27017
// PROTOCOL://HOST_MACHINE{:NON_DEFAULT_PORT}/DB_NAME
var connected = mongoose.connect('mongodb://localhost/radioDB').then(function(err) {
    if (err) {
        console.log('DB Error:', err)
    } else {
        console.log('Database connected')
    }
})

// create a schema for our Radio objects
// create a collection in our database
// The permitted SchemaTypes are String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
var Radio = mongoose.model('Radio', {
    genreId : { type:Number, required:true },
    genreName : { type:String, required:true },
    urls : Array
})

// CRUD - the fundamental database operations
// Create, Read, Update, Delete

//////////////////////
// Create
//////////////////////
// newRadio = {genreId:'value', genreName:'value', ... }
function createRadio(newRadio) {

  var dbRadio = new Radio(newRadio);
  console.log("New Radio:", newRadio)
  console.log("DB Radio:", dbRadio)
  // The save() call is ASYNCHRONOUS, so we cannot return a success or failure status.  We can only return a promise.
  return dbRadio.save()

}

//Create the database
function createRadios(newRadios) {

  Radio.collection.remove({});
  console.log("Database cleaned")

  Radio.collection.insert(newRadios, onInsert);
  console.log("Database created")
}

function onInsert(err, docs){

  if(err){

  }
  else{
    console.log("Database Update successful. Number of records added : ", docs.length);
  }

}


//////////////////////
// Read Radio
//////////////////////
function getRadios(res) {
    // Radio.find({}), function(err, radios){
    //     if (err) {
    //         console.log('No radios found')
    //     }
    //     res.send(stations);
    // }
     getRadio({}, res);  // we could optionally re-use the getRadio() function to get all radios as well
}

// the query parameter will contain zero or more properties with values which
// will be the basis of our search
// var queryExp = new RegExp('^'range+$,'i')  // ^ - beginning of line, i - case insensitive
// Example: query={language:'Java', abilityLevel:queryExp}  // using a regex
// Example: query={language:'Java', abilityLevel:/^[1-3]/i}  // using a regex
// Example: query={language:'Java', abilityLevel:{$lt:4}}  // same thing using mongoose's syntax - preferred

// A note about asynchonousity...
// Mongoose makes its function calls asynchronously, so trying to return a result directly is very difficult - if possible at all.
// In this case, I am passing in the response object from the controller so that this method can
// send back the radios directly to the client whenever it returns with a a result.
// See http://stackoverflow.com/questions/6180896/how-to-return-mongoose-results-from-the-find-method
function getRadio(query, res) {
    // if a null query is passed in, set the query object to be empty - which will return ALL radios
    Radio.find(query || {}, function(err, radios) {
        if (err) {
            console.log('Find failed')
        }
        console.log("Found", radios.length,"radios")

              // var stations, fLen;
              //       stations = ["http://vip-icecast.538.lw.triple-it.nl:80/WEB08_MP3",
              //                   "http://vip-icecast.538.lw.triple-it.nl:80/WEB07_MP3",
              //                   "http://http-live.sr.se/p3-mp3-192",
              //                   "http://vip-icecast.538.lw.triple-it.nl:80/WEB05_MP3"];
        res.send(radios);
    })
}


//////////////////////
// Read Genre
//////////////////////
function getGenres(res) {

     getGenre({}, res);  // we could optionally re-use the getRadio() function to get all radios as well
}

//Find all genres
function getGenre(query, res) {
    // if a null query is passed in, set the query object to be empty - which will return ALL radios
    Radio.collection.find({},{genreName: 1}, function(err, cursor) {
    if (err) {
        console.log('Find failed')
    }

    var generes = [];
    var stations, fLen;
         stations = ["pop",
                     "rock",
                     "classical",
                     "metal"];
    // Execute the each command, triggers for each document
    cursor.each(function(err, item)
     {
      // If the item is null then the cursor is exhausted/empty and closed
      if(item == null) {
          console.log("All items iteration done");
          res.send(generes);
          console.log("Generes sent");
      }
      else
      {
          generes.push(item.genreName);
          console.log(item.genreName);
      }
    });
    })
}

//Find all stations with given genre
function findStationsWithGenre(res, genrename) {
    // if a null query is passed in, set the query object to be empty - which will return ALL radios
    Radio.collection.find({genreName: genrename},{urls: 1}, function(err, cursor) {
    if (err) {
        console.log('Find failed')
    }

    var stations = [];

    // Execute the each command, triggers for each document
    cursor.each(function(err, item)
     {
      // If the item is null then the cursor is exhausted/empty and closed
      if(item == null) {
          console.log("All stations iteration done");
          res.send(stations);
          console.log("Stations sent");
      }
      else
      {
          stations = item.urls;
          console.log(item.urls);
      }
    });
    })
}


//////////////////////
// Update
//////////////////////
// query = {name: 'Joe'}
// update = {language:'Java'}
function updateRadio(query, update) {
    console.log(query,"to", update)
    Radio.findOneAndUpdate(query, {$set: update}, null, function(data) {
        console.log("Update:",data)
    })
}

//////////////////////
// Delete
//////////////////////
function deleteRadio(query) {
    Radio.remove(query, function(err) {
        if (err) {
            console.log('Found no radios that meet the criteria to remove')
        }
    })
}

module.exports = {
    connected: connected,
    makeRadio: createRadio,
    findRadios: getRadios,
    findRadio: getRadio,
    changeRadio:updateRadio,
    removeRadio: deleteRadio,
    createRadios: createRadios,
    findGenres: getGenres,
    findGenre: getGenre,
    findStationsWithGenre:findStationsWithGenre
}
