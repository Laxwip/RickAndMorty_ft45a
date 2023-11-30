import "./Cards.css"
import Card from '../Card/Card.jsx';

export default function Cards({characters,onClose}) {
   return (
   <div className='Cards_contenedor'>
      {
      characters && characters?.map((character) => 
      <Card 
      /*
      El {...character} desestructura las propiedades del character y se las pasa como props individuales a la card, esto seria lo mismo que hacer:
      id = {character.id}
      name = {character.name}
      */
      {...character}
      key = {character.id} 
      onClose={onClose}
      >
      </Card>
      )
      }
   </div>
   )
}
