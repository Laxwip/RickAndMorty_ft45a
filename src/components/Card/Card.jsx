import "./Card.css"

export default function Card(character) {
   return (
      <div className="Card_contenedor">
         <button className="Card_button" onClick={character.onClose}>X</button>
         <img className="Card_image" src={character.image} alt='' />
         <h2 className="Card_name">{character.name}</h2>
         <span className="Card_status">{character.status}</span>
         <span className="Card_species">{character.species}</span>
         <span className="Card_gender">{character.gender}</span>
         <span className="Card_origin">{character.origin.name}</span>
         
      </div>
   );
}
