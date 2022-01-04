const mongoose = require('mongoose');

const objectSchema = {  
    designation: {
        type: String     
    },
    discovery_date: {
        type: String    
    },
    h_mag: {
        type: String  
    },
    moid_au: {
        type: String
    },
    q_au_1: {
        type: String
    },
    q_au_2: {
        type: String
    },
    period_yr: {
        type: String
    },
    i_deg: {
        type: String
    },
    pha: {
        type: String
    },
    orbit_class:{
        type: String
    }
};

const neasSchema = mongoose.Schema(objectSchema);

const Neas = mongoose.model('Neas', neasSchema);

module.exports = Neas;