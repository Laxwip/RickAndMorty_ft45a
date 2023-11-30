import { Link } from "react-router-dom";
import "./Card.css"
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card({onClose, id, image, name, status, species, gender, origin}) {

   const dispatch = useDispatch();

   // const mapDispatchProps = dispatch => {
   //    return{
   //       dispatch1: () => {
   //          dispatch(addFav());
   //       },
   //       dispatch2: () => {
   //          dispatch(removeFav());
   //       }
   //    }
   // }

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true)
         dispatch(addFav({id, image, name, status, species, gender, origin}))
      }
   }

   const myFavorites = useSelector(state => state.myFavorites)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      <div className="Card_contenedor">
         <button 
         className="Card_button_delete" 
         onClick = {() => onClose(id)} >X</button>
         {/* <button className="Card_button_fav">✰</button> */}
         {
            isFav ? (
               <button className="Card_button_fav" onClick={handleFavorite}>❤️</button>
            ) : (
               <button className="Card_button_fav" onClick={handleFavorite}>🤍</button>
            )
         }
         <Link to={`/detail/${id}`}>
            <img className="Card_image" src={image} alt='' />
            <h2 className="Card_name">{name}</h2>
         </Link>
         <div className="Card_contenedor_texto_general">
            <div className="Card_contenedor_text">
               <span className="Card_id"><b>ID: </b></span>
               <span className="Card_id_value">{id}</span>
            </div>
            <div className="Card_contenedor_text">
               <span className="Card_status"><b>Estado:</b></span>
               <span className="Card_status_value">{status}</span>
            </div>
            <div className="Card_contenedor_text">
               <span className="Card_species"><b>Especie:</b></span>
               <span className="Card_species_value">{species}</span>
            </div>
            <div className="Card_contenedor_text">
               <span className="Card_gender"><b>Género:</b></span>
               <span className="Card_gender_value">{gender}</span>
            </div>
            <div className="Card_contenedor_text">
               <span className="Card_origin"><b>Origen:</b></span> 
               <span className="Card_origin_value">{origin.name}</span>
            </div>
         </div>
         
      </div>
   );
}
