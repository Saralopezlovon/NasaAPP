const Neas = require ('../models/neas')

const neasApi = {

    getNeas: async (req,res)=>{  

        let data
        
        try{
            
            if(req.query.class){ 

                let data_class = req.query.class;
                let data_orbitClass = data_class.charAt(0).toUpperCase() + data_class.slice(1) //Mayúscula la primera letra
                     
                data = await Neas.find({orbit_class: data_orbitClass}, {designation:1, period_yr:1, _id:0})
                res.status(200).json(data)


            }else if (req.query.from && req.query.to ) {

                data = await Neas.find({discovery_date:{$gte: req.query.from, $lte: req.query.to }}, {designation:1, discovery_date:1, period_yr:1, _id:0})
                res.status(200).json(data)

            } else if(req.query.from){

                data = await Neas.find({discovery_date: {$gte: req.query.from}}, {designation:1, discovery_date:1, period_yr:1, _id:0})
                res.status(200).json(data)
                
            } else if(req.query.to){
               
                data = await Neas.find({discovery_date: {$lte: req.query.to }}, {designation:1, discovery_date:1, period_yr:1, _id:0})
                res.status(200).json(data)

            } else{
                console.log("Búsqueda fallida")
                data= await Neas.find({});
                res.status(200).json({neas: data})
            }

        }catch(err){
            res.status(400).json({"error":err});
        }

     }

}

module.exports = neasApi;
