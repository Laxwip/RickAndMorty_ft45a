import React,{useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import "./Detail.css"
import axios from 'axios'

export default function Detail() {
   //Estado local declarado
   const { id } = useParams();
   const [character, setCharacter] = useState({})
   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
          const data = response.data;
    
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
    <div className='Detail_contenedor'>
      <img src={character.image} alt={character.name} />
      <div className="Detail_contenedor_texto_general">
        <div>
          <h1 className='Detail_name'>{character.name}</h1>
        </div>
        <div className="Detail_contenedor_text">
            <span className="Detail_id"><b>ID: </b></span>
            <span className="Detail_id_value">{character.id}</span>
        </div>
        <div className="Detail_contenedor_text">
            <span className="Detail_status"><b>Estado:</b></span>
            <span className="Detail_status_value">{character.status}</span>
        </div>
        <div className="Detail_contenedor_text">
            <span className="Detail_species"><b>Especie:</b></span>
            <span className="Detail_species_value">{character.species}</span>
        </div>
        <div className="Detail_contenedor_text">
            <span className="Detail_gender"><b>Género:</b></span>
            <span className="Detail_gender_value">{character.gender}</span>
        </div>
        <div className="Detail_contenedor_text">
            <span className="Detail_origin"><b>Origen:</b></span> 
            <span className="Detail_origin_value">{character.origin?.name}</span>
        </div>
      </div>
    </div>
  )
}
