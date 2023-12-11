const axios = require('axios').default;


const URL = `https://rickandmortyapi.com/api/character/`

//° ASYNC AWAIT
const getCharById = async (req, res)=>{
  try {
    // Obtenemos el valor id del parametro dentro de la url
    const id = req.params.id;
    //Hacemos una peticion a la Api de Rick And Morty con el id que recibimos por parametro
    const response = await axios.get(`${URL}${id}`)
    //Acedemos al cuerpo de la respuesta y trabajamos directamente con los datos que necesitamos
    const char = response.data;
    //Verificamos si dentro del objeto tenemos la propiedad y valor id.
    if(char.id){
      //Creamos el objeto que retornaremos a nuestra peticion como respuesta
      const character = {
      id: char.id,
      name: char.name,
      status: char.status,
      species: char.species,
      gender: char.gender,
      origin: char.origin,
      image: char.image
      };
      res.status(200).json(character)
    } 
    else {
      res.status(404).json({message: "Not fount"})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//° PROMESAS
// const getCharById = (req, res) => {
//   // Obtenemos el valor id del parametro dentro de la url
//   const id = req.params.id
//   //Hacemos una peticion a la Api de Rick And Morty con el id que recibimos por parametro
//   axios.get(`${URL}${id}`)
//   //Acedemos al cuerpo de la respuesta y trabajamos directamente con los datos que necesitamos
//   .then((res) => res.data)
//   .then((char) => {
//     //Verificamos si dentro del objeto tenemos la propiedad y valor id.
//     if(char.id){
//       //Creamos el objeto que retornaremos a nuestra peticion como respuesta
//       const character = {
//       id: char.id,
//       name: char.name,
//       status: char.status,
//       species: char.species,
//       gender: char.gender,
//       origin: char.origin,
//       image: char.image
//       };
//       res.status(200).json(character)
//     } 
//     else {
//       res.status(404).json({message: "Not fount"})
//     }
//     })
//   .catch((error) => {
//     res.status(500).json({message: error.message})
//   })
// }


module.exports = getCharById