const landingsApi = require('../controllers/landingsApi');

const routes = require('express').Router();

/*************************RUTAS PARA LA API************************************/

//Ruta base:
    //http://localhost:3000/api/astronomy/landings

// http://localhost:3000/api/astronomy/landings?minimum_mass=200000
routes.get('/astronomy/landings', landingsApi.getMeteoritesMinMass)

// http://localhost:3000/api/astronomy/landings/mass/200000
routes.get('/astronomy/landings/mass/:mass?', landingsApi.getMeteoritesMass)

// http://localhost:3000/api/astronomy/landings/recclass/L6
routes.get('/astronomy/landings/recclass/:recclass?', landingsApi.getMeteoritesRecclass)




module.exports = routes;