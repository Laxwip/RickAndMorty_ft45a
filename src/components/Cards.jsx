import Card from './Card';

export default function Cards({characters}) {
   console.log(characters);
   return (
   <div>
      {
      characters && characters.map((character) => <Card key = {character.id} {...character} onClose={() => window.alert('Emulamos que se cierra la card')}></Card>)
      }
   </div>
   )
}
