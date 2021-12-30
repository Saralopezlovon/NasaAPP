const mongoose = require('mongoose');
const objectSchema = {
    name: {
        type: String     
    },
    id: {
        type: String    
    },
    nametype: {
        type: String  
    },
    recclass: {
        type: String
    },
    mass: {
        type: String
    },
    fall: {
        type: String
    },
    year: {
        type: String
    },
    reclat: {
        type: String
    },
    reclong: {
        type: String
    },
    geolocation: {
        type: Object
    }
};

const landingSchema = mongoose.Schema(objectSchema);

const Landing = mongoose.model('Landing', landingSchema);

module.exports = Landing;