import "./SearchBar.css"

export default function SearchBar(props) {
   return (
      <div className="Search_contenedor">
         <input className = "Search_input" type = 'search'/>
         <button className = "Search_button" onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
