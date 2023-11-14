import "./SearchBar.css"
import {useState} from "react";

export default function SearchBar({ onSearch }) {
   //Declaramos un estado tipo string donde guardaremos el valor ingresado en el input
   const [id, setId] = useState("")
   //Declaramos una funcion que manejará el cambio del input
   const handleChange = (event) =>{
      setId(event.target.value);
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
         onClick = {()=>
            onSearch(id)
         }
         >Agregar
         </button>
      </div>
   );
}
