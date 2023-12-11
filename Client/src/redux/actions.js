import axios from "axios";

export const addFav = (character) => {
  try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      const response = await axios.post(endpoint, character)
      const data = response.data
        return dispatch({
          type: 'ADD_FAV',
          payload: data,
        });
    };    
  } catch (error) {
    console.error(error.message)
  }
};

// export const addFav = (character) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav';
//   return (dispatch) => {
//      axios.post(endpoint, character).then(({ data }) => {
//         return dispatch({
//            type: 'ADD_FAV',
//            payload: data,
//         });
//      });
//   };
// };


export const removeFav =  (id) => {
  try {
    // Guardamos el link junto con el id
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       const response = await axios
       //nos retorna el objeto con el array de characters favoritos sin el favorito o carta eliminada
       .delete(endpoint)
       // Desestructuramos el array 
      const data = response.data
      return dispatch({
         type: 'REMOVE_FAV',
         payload: data,
      });
    };
  } catch (error) {
    console.error(error.message)
  }

};

// export const removeFav = (id) => {
//   // Guardamos el link junto con el id
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

//   return (dispatch) => {
//      axios
//      //nos retorna el objeto con el array de characters favoritos sin el favorito o carta eliminada
//      .delete(endpoint)
//      // Desestructuramos el array 
//      .then(({ data }) => {
//         return dispatch({
//            type: 'REMOVE_FAV',
//            payload: data,
//      });
//      });
//   };
// };

export const filterCards = (gender) => {
  return{
    type: "FILTER",
    payload: gender
  }
}

export const orderCards = (orden) => {
  return{
    type: "ORDER",
    payload: orden
  }  
}
