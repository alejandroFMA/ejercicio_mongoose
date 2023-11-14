const mongoose = require('mongoose');

const objectSchema = {
    company_name: { type: String, required: true, unique: true },
    CIF: { type: String, required: true , unique: true}, //deberia ponerse unique:true
    address:{ type: String, required: true },
    url_web: { type: String, required: true }
};


const providerSchema = mongoose.Schema(objectSchema)
const Provider = mongoose.model('provider', providerSchema)



module.exports = Provider