const Landing = require ('../models/landing')

const landingApi = {

    getMeteoritesMinMass: async (req,res)=>{
        let data

        try{
            if(req.query.minimum_mass){
                data= await Landing.find({mass: {$gte: req.query.minimum_mass}}, {name:1, mass:1, _id:0 })
                res.status(200).json(data)

            } else{
                data= await Landing.find({});
                res.status(200).json({landings: data})
            }
            
        }catch(err){
            res.status(400).json({"error":err});
        }

    },

    getMeteoritesMass: async (req,res)=>{
        //console.log("*******************");
        //console.log(req.params.mass);

        let data;

        // const data= await Landing.find({mass:"200000"})
        // await console.log({data})
        // res.status(200).json(data)

        try{
            if(req.params.mass){
                data= await Landing.find({mass: req.params.mass}, {name:1, mass:1, _id:0 })
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
