const express = require('express')
const landingsApiRouter= require('./routes/landingsApi')
const neasApiRouter= require('./routes/neasApi')

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

require('dotenv').config() // carga fichero variables de entorno
require('./utils/dbmongo') //Conexión a la BBDD de mongo

//Mi home
app.get('/', (req, res) => {
    res.send('Mi home de meteoritos')
  }) 

app.use("/api/", landingsApiRouter) //Rutas API landing
app.use("/api/astronomy/", neasApiRouter) //Rutas API neas

 
  
//Listen
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })




























//https://api.nasa.gov/planetary/apod?api_key=cxyDWKMFhViiNSdq173uRTfRSEWHruOc8JzNxeXZ

//////////////////////////7Queries que necesito para sacar info de LANDINGS///////////////////////////////////

//1H. Quiero obtener el nombre y la masa de los meteoritos CUANDO especifique la mínima masa de un meteorito
//Utilizamos el operador gte (greater than equal gte) para buscar y la proyección para que aparezcan los datos que queremos

    //const aux1 = NASA_INFO.collection('Landings').find({mass: {$gte: "20"}}).project({name:1, mass:1, _id:0 });

//2H. Quiero obtener el nombre y la masa de los meteoritos CUANDO especifique la masa exacta del meteorito

    //const aux2 = NASA_INFO.collection('Landings').find({mass:"20"}).project({name:1, mass:1, _id:0 });

//3H. Quiero obtener el nombre y la clase de todos los meteoritos CUANDO yo especifique la clase

    //const aux3 = NASA_INFO.collection('Landings').find({recclass:"L5"}).project({name:1, recclass:1, _id:0 });

//4H. Quiero obtener el nombre la masa y la fecha CUANDO especifique la fecha de caida
//Utilizamos el gte para mayor o igual y el lt que es menor low than 

    //const aux4 = NASA_INFO.collection('Landings').find({fall:"Fell", year: {'$gte':"1880-01-01T00:00:00.000",'$lte': "1881-01-01T00:00:00.000"}}).project({name:1, mass:1, year:1, _id:0 });







/////////////////////////////Queries que necesito para sacar info de NEAS ////////////////////////////

//1. Quiero obtener la designación y el periodo actual CUANDO añada la clase

    //const aux1 = NASA_INFO.collection('Neas').find({orbit_class:"Apollo"}).project({designation:1, period_yr:1, _id:0});

//2. Quiero obtener la designación, fecha y periódo anual CUANDO DOS fechas

    //const aux2 = NASA_INFO.collection('Neas').find({discovery_date: {'$gte':"2011-01-07T00:00:00.000",'$lte': "2011-01-07T00:00:00.000"}}).project({designation:1, discovery_date:1, period_yr:1, _id:0});


