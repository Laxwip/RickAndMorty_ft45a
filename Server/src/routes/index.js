const express = require ("express");
const router = express.Router()



//+ CONTROLADORES ( importados )
//° Son los que se comunican directamente con la base de datos 
const getCharById = require("../controllers/getCharById")

const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

//+ RUTAS 
//° Redireccionan de acuerdo a la ruta y ejecutan una funcion sin interactuar directamente con la base de datos
router.get("/character/:id", getCharById)

router.get("/login", login)
router.post("/login", postUser)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)



module.exports = router

