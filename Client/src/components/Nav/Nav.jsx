import "./Nav.css"
import { Link } from 'react-router-dom'
import React from 'react'
import SearchBar from './searchBar/SearchBar.jsx'

export default function Nav({onSearch, logOut}) {
  return (
    <div className='Nav_contenedor'>
      <div className='Nav_contenedor_pages'>
      <Link to= "/about">
        <button className='Nav_button_pages'>About</button>
      </Link>
      <Link to= "/home">
        <button className='Nav_button_pages'>Home</button>
      </Link>
      <Link to= "/favorites">
        <button className='Nav_button_pages'>Favorites</button>
      </Link>

      <button onClick={logOut} className='Nav_button_logout'>Logout</button>
      </div>
      <SearchBar onSearch = {onSearch} ></SearchBar>
    </div>
  )
}
