const mongoose = require('mongoose');


const objectSchema = {
    companyName: String,
    firstParty: Boolean,
    website: String
}

// Crear el esquema
const publisherSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;



/*
Para añadir nuevo juevo
1- Buscar el ID que tiene SONY en mongoDB -> const pub = Publisher.find({company:Sony})
2- Crear el juego, añadiendo el ID -> new Publisher({title:"Tomb Raider",publisher_id:pub._id})
*/