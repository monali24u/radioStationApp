// require express to create the listener and do the routing
var express = require('express');
var app = express();

// serve up any file in the ./public/html directory
app.use(express.static('./public'))


//Update Database
var Database = require('./public/js/populateDatabase.js')
Database.makeradio()

// Routes
var Routes = require('./routes/radioRouter.js')
Routes(app)

// create the node http server, listening to port 8080
app.listen(8080, function(err) {
    if (err) {
        console.log("Server failed to start:", err)
    } else {
        console.log("Server is up on port 8080")
    }
})
