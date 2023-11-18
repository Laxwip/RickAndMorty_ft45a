import React,{useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'

export default function Detail() {
   //Estado local declarado
   const { id } = useParams();
   const [character, setCharacter] = useState({})
   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          const data = await response.json();
    
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      fetchData();
    
      // La función de limpieza aquí puede no ser necesaria, dependiendo de tus necesidades específicas
      return setCharacter({});
    }, [id]);
  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <img src={character.image} alt="" />
      <h2>{character.origin?.name}</h2>
    </div>
  )
}
