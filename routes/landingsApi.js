const landingsApi = require('../controllers/landingsApi');

const routes = require('express').Router();

/*************************RUTAS PARA LANDINGS API************************************/

//Ruta base:
    //http://localhost:3000/api/astronomy/landings

// http://localhost:3000/api/astronomy/landings?minimum_mass=200000
// http://localhost:3000/api/astronomy/landings?from=1960&to=1990
// http://localhost:3000/api/astronomy/landings?from=1960
// http://localhost:3000/api/astronomy/landings?to=1990
routes.get('/astronomy/landings', landingsApi.getMeteorites)

// http://localhost:3000/api/astronomy/landings/mass/200000
routes.get('/astronomy/landings/mass/:mass?', landingsApi.getMeteoritesMass)

// http://localhost:3000/api/astronomy/landings/recclass/L6
routes.get('/astronomy/landings/recclass/:recclass?', landingsApi.getMeteoritesRecclass)



module.exports = routes;