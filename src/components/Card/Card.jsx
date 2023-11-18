import { Link } from "react-router-dom";
import "./Card.css"

export default function Card({onClose, id, image, name, status, species, gender, origin}) {
   return (
      <div className="Card_contenedor">
         <button 
         className="Card_button_delete" 
         onClick = {() => onClose(id)} >X</button>
         <button className="Card_button_fav">✰</button>
         <Link to={`/detail/${id}`}>
            <img className="Card_image" src={image} alt='' />
            <h2 className="Card_name">{name}</h2>
         </Link>
         <span className="Card_status">{status}</span>
         <span className="Card_species">{species}</span>
         <span className="Card_gender">{gender}</span>
         <span className="Card_origin">{origin.name}</span> 
         
      </div>
   );
}
