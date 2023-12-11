import './App.css';

import {useEffect, useState} from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {validate} from "./components/Form/validation.js"
import { useDispatch, useSelector } from 'react-redux';
import { removeFav } from './redux/actions.js';

import axios from "axios";
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/404/error.jsx';
import Form from './components/Form/Form.jsx';
import Default from './components/Cards/Default.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import DefaultFav from './components/Favorites/DefaultFav.jsx';

function App() {
   //Estado local de Personajes
   const [characters, setCharacters] = useState([]);
   //Guardamos la funcion generada por el hook usenavigate
   const navigate = useNavigate()
   //Declaramos un fn onSearch que permite agregar nuevos personajes de una API

   //º ASYNC AWAIT
   const onSearch = async (id) => {
      try {
         const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
         const data = response.data
         if (data && data.id) {
            if (characters.some((character) => character.id === data.id)) {
               window.alert("Ya existe este personaje");
            } else {
               setCharacters((oldChars) => [data, ...oldChars]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
         navigate("/home");
      } catch (error) {
         console.error('Error:', error.message);
      }
   }

   //º PROMESA
   // const onSearch = (id) => {
   //    // Hacemos una solicitud con axios
   //    axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
   //      .then((response) => {
   //        // Convertimos la respuesta HTTP de axios a un objeto de JS
   //        const data = response.data;
    
   //        // Verificamos si hay algo dentro de data y luego si dentro de data tenemos un id
   //        if (data && data.id) {
   //          // Verificamos si dentro de nuestro estado local hay algún character que tenga el mismo id con el character que estamos solicitando con axios
   //          if (characters.some((character) => character.id === data.id)) {
   //            window.alert("Ya existe este personaje");
   //          } else {
   //            // En caso de que no haya coincidencia, se añade a characters el character que solicitamos junto con los que ya teníamos previamente
   //            setCharacters((oldChars) => [data, ...oldChars]);
   //          }
   //        } else {
   //          // Si el id no existe dentro de la base de datos, nos da el mensaje de que no existe
   //          window.alert('¡No hay personajes con este ID!');
   //        }
    
   //        // Luego de la ejecución de la función anterior, se ejecuta o redirecciona al home
   //        navigate("/home");
   //      })
   //      .catch((error) => {
   //        // Manejamos el error en caso de que la solicitud falle
   //        console.error('Error:', error.message);
   //      });
   //  };

   const dispatch = useDispatch()

   //Declaramos una fn onClose que nos permitira eliminar la card que eligamos 
   const onClose = (id) =>{
      //Filtramos y obtenemos el array sin el personaje[id]
      const updatedCharacters = characters.filter((character)=>
      character.id !== Number(id))
      //modificamos el estado local con los characters filtrados
      setCharacters((updatedCharacters));
      //Eliminamos tambien del estado global el favorito que tengamos con ese id
      dispatch(removeFav(id))
   }
   //Guardamos la funcion generada por el hook useLocation
   const location = useLocation();
   //Declaramos otro estado para el form Control
   const [userData, setUserData] = useState({
      email: "",
      password: "",
   })
   // //Declaramos otro estado para guardar los errores del form Control
   const [errors, setErrors] = useState({
      email: "",
      password: "",
   })
   //Estado local de acceso
   const [access, setAccess] = useState(false)
   // //Email y Password de ejemplo para el acceso
   // const EMAIL = "laxwip@gmail.com"
   // const PASSWORD = "pepito13"

   //° ASYNC AWAIT
   const login = async (userData) => {
      try {
         const {email, password} = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`)
         // console.log('Response:', response)
         const {data} = response
         const {access} = data
         setAccess(access);
         access && navigate("/home")
      } catch (error) {
         console.error('Error durante el inicio de sesión:', error.message)
      }
   }

   //° PROMESAS
   // Fn para comprobar que el Email y Password 
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }
   //Fn para salir de la sesion
   const logOut = () =>{
      setAccess(false)
      navigate("/")
   }
   //Se redirecciona a la pagina de form cuando el acceso es false
   // useEffect(() => {
   //    //Si access es false dentro de la negacion entonces se ejecuta lo siguiente 
   //    !access && navigate('/');
   //    // !access && navigate('/home');
   // }, [access]);

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

   const favs = useSelector(state => state.allCharacters)


   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      
      <div className='App'>

         {/* Condicionamos en que rutas aparecerá el componente Nav */}
         {
            location.pathname === "/home" || location.pathname === "/about" || location.pathname === "/favorites" || location.pathname.startsWith("/detail/") ? <Nav onSearch = {onSearch} logOut = {logOut}></Nav> : null
         }

         <Routes>
         //+ RUTAS

            //° FORM
            <Route 
            path='/' 
            element = {
               <div 
               className = 'centered'>
                  <Form 
                  userData = {userData} 
                  handleChange = {handleChange} 
                  handleSubmit = {handleSubmit} 
                  errors = {errors} >
                  </Form>
               </div>
               }
            ></Route>
            
            //° CARDS
            <Route 
            path = '/home' 
            element = {
               characters.length > 0 ? (
                  <Cards 
                  onClose = {onClose} 
                  characters = {characters}
                  />
                  ) : (
                  <Default></Default>
                  )
               }
            ></Route>

            //° ABOUT
            <Route 
            path = '/about' 
            element = {
               <div 
                  className = 'centered'>
                  <About></About>
               </div>}>
            </Route>
            
            //° FAVORITES
            <Route 
            path = '/favorites' 
            element = {
               favs.length > 0 ? (
                  <Favorites 
                  onClose = {onClose}>
                  </Favorites>
                  ) : (
                     <DefaultFav></DefaultFav>
               )
            }
            ></Route>

            //° DETAIL
            <Route 
            path='/detail/:id' 
            element = { 
               <div 
               className='centered'>
                  <Detail></Detail>
               </div>}>
            </Route>
            
            //° ERROR ( 404 )
            <Route 
               path='*' 
               element = {
               <Error></Error>
               }
            ></Route>

         </Routes>
         
         <button id="scrollButton" onClick={scrollToTop}>
            ↑
         </button>
         
      </div>
   );
}

export default App;


