import './App.css';
import {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/404/error.jsx';

function App() {
   //Declaramos un estado
   const [characters, setCharacters] = useState([]);
   //Guardamos la funcion generada por el hook usenavigate
   const navigate = useNavigate()
   //Declaramos un fn onSearch que permite agregar nuevos personajes de una API
   const onSearch = (id) =>{
      //Hacemos una solicitud
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      //convertimos la respuesta HTTP de fetch a un objeto de JS
      .then((res) => res.json())
      //data está tomando el resultado de la respuesta json anterior
      .then(
         (data) => {
            //Verificamos si hay algo dentro de data, y luego si dentro de data tenemos un id
            if(data && data.id){
               //Verificamos si dentro de nuestro estado local hay algun character que tenga el mismo id con el character que estamos solicitando con el fetch
               if(characters.some((character) => 
               //Si coinciden sus id, Nos sale una alerta de que ya existe
               character.id === data.id)){
                  window.alert("Ya existe este personaje")
               //En caso de que no haya coincidencia, se añade a characters el character que solicitamos junto con los que ya teniamos previamente
               } else{
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            //Si el id no existe dentro de la base de datos, nos da el mensaje de que no existe
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
      //Luego de la ejecucion de la funcion anterior, se ejecuta o redirecciona al home
      navigate("/")
   }
   //Declaramos una fn onClose que nos permitira eliminar la card que eligamos 
   const onClose = (id) =>{
      //Guardamos los characters que no sean igual al id que estamos seleccionando 
      const updatedCharacters = characters.filter((character)=>
      character.id !== Number(id))
      setCharacters((updatedCharacters));
   }

   

   return (
      <div className='App'>
         <Nav onSearch = {onSearch} ></Nav>
         <Routes>
            <Route path='/' element={<Cards onClose = {onClose} characters={characters}/>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
         </Routes>
         
      </div>
   );
}

export default App;
