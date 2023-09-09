import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";



function Card(props) {
   const {character,onClose,addFav,removeFav,myFavorites} = props;
   const {name,species, gender, image,id} = character;  
   
   const [isFav, setIsFav] = useState(false);
   
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   
   function handleFavorite(data){
      if(!isFav){
         addFav(data);
         setIsFav(true);
      }else{
         removeFav(data);
         setIsFav(false);
      }
   }




   return (
      <div className="individual">
         <button className="cerrar" onClick={()=>{onClose(id)}}>X</button>
         {isFav ? 
         (<button onClick={() => handleFavorite(id)}>❤️</button>) : 
         (<button onClick={() => handleFavorite(character)}>🤍</button>)
         }
            <Link to={`/detail/${id}`}>
               <h2>
                  {name}
               </h2>
            </Link>

         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

const mapDispatchToProps = function (dispatch){
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav:(id) => dispatch(removeFav(id))
   };
};
const mapStateToProps = function(state){
   return{
      myFavorites: state.myFavorites,
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);

