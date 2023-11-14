
const manage404 = (req,res) =>{
    res.status(404).send({msj:"Gatito triste- 404 not found", img:"https://cdn.dribbble.com/users/2594343/screenshots/6537210/404-animation-cat.gif"});
    
}
//ultima ruta por defecto, aparece si no coincide el request con ninguna respuesta anterior, se devuelve 404

module.exports = manage404;