import "./SearchBar.css"
import {useState} from "react";

export default function SearchBar({ onSearch }) {
   //Declaramos un estado tipo string donde guardaremos el valor ingresado en el input
   const [id, setId] = useState("")
   //Declaramos una funcion que manejará el cambio del input
   const handleChange = (event) =>{
      setId(event.target.value);
   }
   const handleDelete = () =>{
      setId("")
   }
   //Declaramos una funcion que dara un id random y ejecutara la funcion de onSearch con dicho id
   const randomPersonaje = () =>{
      const numRamdom = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
      onSearch(numRamdom)
   }
   return (
      <div className="Search_contenedor">
         <input 
         className = "Search_input" 
         type = 'text' 
         value = {id} 
         onChange={handleChange}
         placeholder="Ingresa un ID"/>

         <button 
         className = "Search_button" 
         onClick = {()=>{
            onSearch(id);
            handleDelete();
         }
            
         }
         >Agregar
         </button>

         <button
         className="Search_ramdom"
         onClick={() =>
            randomPersonaje()}>
            Random
         </button>
      </div>
   );
}
