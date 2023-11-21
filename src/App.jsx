import './App.css';
import {useEffect, useState} from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {validate} from "./components/Form/validation.js"
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/404/error.jsx';
import Form from './components/Form/Form.jsx';

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
                  setCharacters((oldChars) => [data, ...oldChars]);
               }
            //Si el id no existe dentro de la base de datos, nos da el mensaje de que no existe
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
      //Luego de la ejecucion de la funcion anterior, se ejecuta o redirecciona al home
      navigate("/home")
   }
   //Declaramos una fn onClose que nos permitira eliminar la card que eligamos 
   const onClose = (id) =>{
      //Guardamos los characters que no sean igual al id que estamos seleccionando 
      const updatedCharacters = characters.filter((character)=>
      character.id !== Number(id))
      setCharacters((updatedCharacters));
   }
   //Guardamos la funcion generada por el hook useLocation
   const location = useLocation();
   //Declaramos otro estado para el form Control
   const [userData, setUserData] = useState({
      email: "",
      password: "",
   })
   //Declaramos otro estado para guardar los errores del form Control
   const [errors, setErrors] = useState({
      email: "",
      password: "",
   })
   const [access, setAccess] = useState(false)
   const EMAIL = "laxwip@gmail.com"
   const PASSWORD = "pepito13"

   const login = (userData) =>{
      if(userData.email == EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate("/home")
      } else {
         alert("Datos erroneos")
      }
   }
   const logOut = () =>{
      setAccess(false)
      navigate("/")
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   //Escuchador que sobrescribe los valores de los estados en tiempo real
   const handleChange = (event) => {
      const {value} = event.target;
      setUserData({
         ...userData,
         [event.target.name]: value,
      })
      setErrors(
         validate({
           ...userData,
           [event.target.name]: value,
         })
       )
   }
   //Escuchador que ejecuta algo al presionar el boton de submit
   const handleSubmit = (event) =>{
      //Le indica al navegador que no haga lo que hace por defecto
      event.preventDefault()
      //Guardamos los errores de la ultima validacion de los datos
      const newErrors = validate(userData);
      //Guardamos en el estado los nuevos errores
      setErrors(newErrors)
      
      //Creamos un array con los valores de los nuevos errores
      const errorsArray = Object.values(newErrors)
      //Verificamos si dentro del array hay errores o no
      if(errorsArray.every((error) => error === "")){
         //Si no hay errores:
        if(login(userData)){
         setUserData({
            email: "",
            password: "",
        });
        setErrors({
            email: "",
            password: "",
        });
        }
        
        //Si detectamos errores:
      } else {
        alert("Debe llenar todos los campos")
      }
      
    }
   return (
      
      <div className='App'>

         {/*Condicionamos en que rutas aparecerá el componente Nav*/}
         {
            location.pathname === "/home" || location.pathname === "/about" || location.pathname.startsWith("/detail/") ? <Nav onSearch = {onSearch} logOut = {logOut}></Nav> : null
         }

         
         <Routes>
            <Route path='/' element={<div className='centered'><Form userData = {userData} handleChange = {handleChange} handleSubmit = {handleSubmit} errors = {errors} ></Form></div>}></Route>
            
            <Route path='/home' element={<Cards onClose = {onClose} characters={characters}/>}></Route>

            <Route path='/about' element={<div className='centered'><About></About></div>}></Route>

            <Route path='/detail/:id' element={<Detail></Detail>}></Route>

            <Route path='*' element={<Error></Error>}></Route>

         </Routes>
         
      </div>
   );
}

export default App;
