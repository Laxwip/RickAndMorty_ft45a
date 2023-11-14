import Card from '../Card/Card.jsx';
import "./Cards.css"

export default function Cards({characters,onClose}) {
   return (
   <div className='Cards_contenedor'>
      {
      characters && characters?.map((character) => 
      <Card 
      key = {character.id} 
      {...character} 
      onClose={onClose}
      id = {character.id}>
      </Card>
      )
      }
   </div>
   )
}
