import "./Card.css"

export default function Card({onClose, id, image, name, status, species, gender, origin}) {
   return (
      <div className="Card_contenedor">
         <button 
         className="Card_button" 
         onClick = {() => onClose(id)} >X</button>
         <img className="Card_image" src={image} alt='' />
         <h2 className="Card_name">{name}</h2>
         <span className="Card_status">{status}</span>
         <span className="Card_species">{species}</span>
         <span className="Card_gender">{gender}</span>
         <span className="Card_origin">{origin.name}</span> 
         
      </div>
   );
}
