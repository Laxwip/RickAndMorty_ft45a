import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import {useState} from 'react';
import './App.css';

function App() {
   //Declaramos un estado
   const [characters, setCharacters] = useState([]);
   //Declaramos un fn onSearch que permite agregar nuevos personajes de una API
   const onSearch = (id) =>{
      //Hacemos una solicitud
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      //convertimos la respuesta HTTP de fetch a un objeto de JS
      .then((res) => res.json())
      //data está tomando el resultado de la respuesta json anterior
      .then(
         (data) => {
            if(data && data.id){
               if(characters.some((character) => 
               character.id === data.id)){
                  window.alert("Ya existe este personaje")
               } else{
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }
   const onClose = (id) =>{
      const updatedCharacters = characters.filter((character)=>
      character.id !== Number(id))
      setCharacters((updatedCharacters));
   }
   return (
      <div className='App'>
         <Nav onSearch = {onSearch}></Nav>
         <Cards onClose = {onClose} characters={characters}/>
      </div>
   );
}

export default App;
