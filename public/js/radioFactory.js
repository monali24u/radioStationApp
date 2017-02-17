angular.module('radioApp')
    .factory('radioFactory', radioFactoryFunction);

radioFactoryFunction.$inject = ['$http']
function radioFactoryFunction($http) {

    // Get the list of all of our aliens
    function getStation() {
        // return aliens;
        // http.get returns the Promise for the asynchronous http request
        // we want to use the data from the successful promise in our controller,
        // but we can't return it from inside the promise, so we return the whole promise to the controller.
        return $http.get('/station');
    }

    // Get the list of all of our aliens
    function getAllStations() {
        // return aliens;
        // http.get returns the Promise for the asynchronous http request
        // we want to use the data from the successful promise in our controller,
        // but we can't return it from inside the promise, so we return the whole promise to the controller.
        return $http.get('/stations');

    }

    // Add a new alien to our list of aliens
    function createStation(Station) {

        // aliens.push(alien
        console.log('createoneStation:', Station)
        // in this case, since we don't really care about what was returned in the response,
        // we can process the promise here.  To be consistent, we probably should return the
        // promise here and have the controller handle it as well, but
        return $http.post('/oneStation', Station)

    }

    // a Factory is a function, so here we return the things that we want to
    // be visible and share between Controllers
    return {
        getallstations: getAllStations,
        createstation: createStation,
        getstation: getStation
    }
}
