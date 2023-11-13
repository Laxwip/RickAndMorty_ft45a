import Card from '../Card/Card.jsx';
import "./Cards.css"

export default function Cards({characters}) {
   console.log(characters);
   return (
   <div className='Cards_contenedor'>
      {
      characters && characters.map((character) => <Card key = {character.id} {...character} onClose={() => window.alert('Emulamos que se cierra la card')}></Card>)
      }
   </div>
   )
}
