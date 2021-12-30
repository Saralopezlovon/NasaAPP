const Landing = require ('../models/landing')

const landingApi = {

    getMeteoritesMass: async (req,res)=>{
        console.log("*******************");
        console.log(req.params.mass);

        let data;

        // const data= await Landing.find({mass:"200000"})
        // await console.log({data})
        // res.status(200).json(data)

        try{

            if(req.params.mass){
                data= await Landing.find({mass: req.params.mass}, '-_id -id -nametype -recclass -fall -year -reclat -reclong -geolocation ')
                res.status(200).json(data)

            } else{
                data= await Landing.find({});
                res.status(200).json({landings: data})
            }
            
        }catch(err){
            res.status(400).json({"error":err});
        }

    },

}

module.exports = landingApi;
