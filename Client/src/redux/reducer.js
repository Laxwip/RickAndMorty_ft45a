const initialState = {
  myFavorites: [],
  allCharacters: [],
}

export default function reducer(state = initialState, action){
  switch(action.type) {
    case 'ADD_FAV':
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    case 'REMOVE_FAV':
        return { ...state, myFavorites: action.payload };
    case "FILTER":
      if(action.payload === "All") return {
        ...state,
        myFavorites: state.allCharacters,
      }
      const filterFavs1 = state.allCharacters.filter((char) => char.gender ===  action.payload)
      return {
        ...state,
        myFavorites: filterFavs1,
      }
    case "ORDER":
      const orderFav = [...state.myFavorites];
      if(action.payload === "A"){
        orderFav.sort((a, b) => a.id - b.id)
      }
      if(action.payload === "D"){
        orderFav.sort((a, b) => b.id - a.id)
      }
      return {
        ...state,
        myFavorites: orderFav,
      }
    default:
    return {...state};
}
}