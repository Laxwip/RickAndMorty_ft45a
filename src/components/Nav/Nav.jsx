import React from 'react'
import SearchBar from './searchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function Nav({onSearch}) {
  return (
    <div className='Nav_contenedor'>
      <div className='Nav_contenedor_pages'>
      <Link to= "/about">
        <button>About</button>
      </Link>
      <Link to= "/">
        <button>Home</button>
      </Link>
      </div>
      <SearchBar onSearch = {onSearch} ></SearchBar>
    </div>
  )
}
