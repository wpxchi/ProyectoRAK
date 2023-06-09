import style from './Card.module.css'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { addFav, removeFav} from '../../Redux/Action';
import { useState, useEffect } from 'react';


 function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
 
   const [isfav, setIsFav]=useState(false)
   const handleFavorite=()=>{
      isfav? removeFav(id): addFav(id, name, status, species, gender, origin, image, onClose)
      setIsFav(!isfav)
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={style.container}>
         {
   isfav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button onClick={()=>{onClose(id)}} className={style.button}>X</button>
         <img src={image} alt='' /> 
         <Link to={`/detail/${id}`}>
         <p>{name}</p>
         </Link>
           
         <p>{status}</p>
         <p>{species}</p>
         <p>{gender}</p>
         <p>{origin}</p>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) =>dispatch(addFav(character )),
      removeFav:(id) =>dispatch(removeFav(id))
   }
}
const mapStateToProps=(state) => {
   return {myFavorites:state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);