import { connect } from "react-redux";
import Cards from "./Cards";
import { orderCards,filterCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Favorites({myFavorites}) {
  let dispatch = useDispatch();

  const [aux, setAux] = useState(false);



  function handleOrder(event){
    dispatch(orderCards(event.target.value))
    // ...aux,
    setAux(true);
  };
  
  function handleFilter(event){
    dispatch(filterCards(event.target.value))
  };




    return (
      
      <div>
        <select placeholder="Order" onChange={handleOrder}>
          <option value={"Ascendente"}>Ascendente</option>
          <option value={"Descendente"}>Descendente</option>
        </select>
        <select placeholder="Gender" onChange={handleFilter}>
          <option value={"Male"}></option>
          <option value={"Female"}></option>
          <option value={"Genderless"}></option>
          <option value={"unknown"}></option>
        </select>
        <Cards characters={myFavorites}/>
      </div>
      
    );
  };

  const mapStateToProps = function(state){
    return{
       myFavorites: state.myFavorites,
    }
 }

 export default connect(mapStateToProps,null)(Favorites);