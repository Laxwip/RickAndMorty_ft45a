import "./Favorites.css"
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import Card from '../Card/Card'
import { addFav, removeFav, filterCards, orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux"

export default function Favorites({onClose}) {
  const myFavorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)

  const handleOrder = (e) =>{
    dispatch(orderCards(e.target.value))
    setAux(true)
  }

  const handleFilter =  (e) =>{
    dispatch(filterCards(e.target.value))
  }

  return (
    <div className='Favorites_contenedor'>
      <div className="Favorites_selectores">
        <select name="Order" id="Order" onChange={handleOrder}>
          {/* <option value="">Order</option> */}
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="Gender" id="Gender" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="Favorites_cards">
        {
        myFavorites && myFavorites?.map((character, index) => 
        <Card 
        /*
        El {...character} desestructura las propiedades del character y se las pasa como props individuales a la card, esto seria lo mismo que hacer:
        id = {character.id}
        name = {character.name}
        */
        {...character}
        key = {index} 
        onClose={onClose}
        >
        </Card>
        )
        }
      </div>
    </div>
  )
}
