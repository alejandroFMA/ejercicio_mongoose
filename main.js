const express = require("express");
const app = express();
const port = 3000;
const morgan = require("./middlewares/morgan");
const productsRoutes = require("./routes/productsroutes.routes")
const providersRoutes = require("./routes/providersroutes.routes");


app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));

app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercise")
  .then(() => console.log("Now connected to MongoDB!"))
  .catch((err) => console.error("Something went wrong", err));


app.use("/api/products", productsRoutes);
app.use("/api/providers", providersRoutes);

const error404 = require("./middlewares/error404");
app.use("*", error404);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/* https://vegibit.com/mongoose-relationships-tutorial/ */
// Importar modelos
// const Game = require('./models/Game');
// const Publisher = require('./models/Publisher');

// Listar juegos. Uso de populate()
// async function listProducts() {
//     const products = await Product
//         .find()
//         .populate('provider', 'company_name -_id')
//         .select('title provider -_id');
//     console.log(products);
// }

// listProducts();

// createProduct('Montado jamon', 2.500, "Perfecto para la merienda", 'Teatro Marquina');
// createProduct('Bocadillo Lomo', 5.60, "Consta de filete de lomo y queso", 'Bar Paco');
// createProduct('Tarta queso', 6.10, "Top 5 de las mejores tartas de su barrio", 'Buena Comida');
// createProvider('Buena Comida', 'B46222842', 'Avenida nueva 21', 'https://www.buenacomida.es');

// Crear publisher/compañía
// async function createPublisher(companyName, firstParty, website) {
//     const publisher = new Publisher({
//         companyName,
//         firstParty,
//         website
//     });

//     const result = await publisher.save();
//     console.log(result);
// }

// Crear juego pasando título + id_publisher por parámetro
// async function createGame(title, publisher) {
//     const game = new Game({
//         title,
//         publisher
//     });

//     const result = await game.save();
//     console.log(result);
// }

// Crear juego pasando titulo + nombre de compañía por parámetro
// async function createGame2(title, companyName) {

//     const publisher = await Publisher.find({companyName});
//     const publisher_id = publisher[0]._id.toString();

//     const game = new Game({
//         title,
//         publisher:publisher_id
//     });

//     const result = await game.save();
//     console.log(result);
// }

// // Listar juegos. Uso de populate()
// async function listGames() {
//     const games = await Game
//         .find()
//         .populate('publisher', 'companyName -_id')
//         .select('title publisher -_id');
//     console.log(games);
// }

// createPublisher('Nintendo', true, 'https://www.nintendo.com/');
// createPublisher('Sony', true, 'https://www.sony.com/');
// createPublisher('Sega', true, 'https://www.sega.com/');

//createGame('Sonic the Hedgehog', '62ea5c8deb0cc4db1eb95366');
//createGame('Donkey Kong', '62ea5c8deb0cc4db1eb95364');
//createGame('Pro evolution Soccer 5', '623a1ee700bba314366df2e4');

//Crear juego buscando primero el ID de Sony
/* company.find({companyName:"Sony"}, function(err, docs) {
    if (err) {
        console.log(err);
    } else {
        var id = docs[0]._id;
        console.log(id.toString());
        createGame('Crash Bandicoot 2', id); // Crear el juego

    }
}); */

// Crear juego pasando el ID de Sony
//createGame2('Crash Bandicoot 3', 'Sony');

// Crear juego pasando el ID de Sony
//createGame2('Tetris', 'Nintendo');

// Listar todos los juegos
// listGames()
