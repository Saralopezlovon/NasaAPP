const neasApi = require('../controllers/neasApi');

const routes = require('express').Router();

/*************************RUTAS PARA NEAS API************************************/

//Ruta base:
    //http://localhost:3000/api/astronomy/neas

// http://localhost:3000/api/astronomy/neas?class=aten
// http://localhost:3000/api/astronomy/neas?from=1960&to=1990
// http://localhost:3000/api/astronomy/neas?from=1960
// http://localhost:3000/api/astronomy/neas?to=1990

routes.get('/neas', neasApi.getNeas)

module.exports = routes;



