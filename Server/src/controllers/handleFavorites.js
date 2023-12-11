//+ Simulacion de base de datos ( DB )
let myFavorites = [];



//+ CONTROLADORES
//° Son los que se comunican directamente con la base de datos

// retorno toda la lista de favs sin realizar una modificacion
const allFav = (req, res) => {
  res.json(myFavorites)
}
// retorna la lista de favs luego de agregar un fav
const postFav = (req, res) => {
  myFavorites.push(req.body)
  res.json(myFavorites)
}
// retorna la lista de fav sin el fav que eliminamos
const deleteFav = (req, res) => {
  id = req.params.id;
  const filFavs = myFavorites.filter((char) => char.id !== Number(id))
  myFavorites = filFavs
  res.json(filFavs);
}



module.exports = {
  allFav,
  postFav,
  deleteFav,
}