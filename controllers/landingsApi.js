const Landing = require ('../models/landing');

const landingApi = {

    getMeteorites: async (req,res)=>{

        //Cambia la masa de string a number (solo se ejecuta 1 vez)
            // await Landing.updateMany(
            //     { 'mass' : { $type: 2 } },
            //     [{ $set: { 'mass': { $toDouble: "$mass" } } }]
            // )

        let data

        try{

            if(req.query.minimum_mass){                

                let text = req.query.minimum_mass;
                let data_minimum_mass = parseInt(text);               
                
                data = await Landing.find({mass : {$gte: data_minimum_mass}}, {name:1, mass:1, _id:0 })
                res.status(200).json(data)


            }else if (req.query.from && req.query.to ) {
                //console.log("Desde " + req.query.from + " hasta " + req.query.to )

                data = await Landing.find({fall:"Fell", year: {$gte: req.query.from, $lte: req.query.to }}, {name:1, mass:1, year:1, _id:0 })
                res.status(200).json(data)

            } else if(req.query.from){
                //console.log("Desde " + req.query.from )

                data = await Landing.find({fall:"Fell", year: {$gte: req.query.from}}, {name:1, mass:1, year:1, _id:0 })
                res.status(200).json(data)
                
            } else if(req.query.to){
                //console.log("Desde " + req.query.to )

                data = await Landing.find({fall:"Fell", year: {$lte: req.query.to }}, {name:1, mass:1, year:1, _id:0 })
                res.status(200).json(data)

            } else{
                console.log("Búsqueda fallida")
                data= await Landing.find({});
                res.status(200).json({landings: data})
            }

        }catch(err){
            res.status(400).json({"error":err});
        }

    },

    getMeteoritesMass: async (req,res)=>{

        let data;

        try{
            if(req.params.mass){

                let text = req.params.mass;
                let data_mass = parseInt(text);                 

                data= await Landing.find({mass: data_mass}, {name:1, mass:1, _id:0 })
                res.status(200).json(data)

            } else{
                data= await Landing.find({});
                res.status(200).json({landings: data})
            }
            
        }catch(err){
            res.status(400).json({"error":err});
        }
    },

    getMeteoritesRecclass: async (req,res)=>{        

        let data;

        try{
            if(req.params.recclass){
                data= await Landing.find({recclass: req.params.recclass}, {name:1, recclass:1, _id:0 })
                res.status(200).json(data)

            } else{
                data= await Landing.find({});
                res.status(200).json({landings: data})
            }
            
        }catch(err){
            res.status(400).json({"error":err});
        }

    }


}

module.exports = landingApi;
