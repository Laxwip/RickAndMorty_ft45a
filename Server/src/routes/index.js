const express = require ("express");
const router = express.Router()



//+ CONTROLADORES ( importados )
//° Son los que se comunican directamente con la base de datos 
const getCharById = require("../controllers/getCharById")
const {allFav, postFav, deleteFav} = require("../controllers/handleFavorites")
const login = require("../controllers/login")

//+ RUTAS 
//° Redireccionan de acuerdo a la ruta y ejecutan una funcion sin interactuar directamente con la base de datos
router.get("/character/:id", getCharById)
router.get("/login", login)
router.get("/fav", allFav)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)



module.exports = router

