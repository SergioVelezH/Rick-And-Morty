import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    const {onSearch} = props;
    const [id, setId] = useState("");
    function changeHandler (event){
      setId(event.target.value);
    }
    return (

       <div>
         <NavLink to={"/about"}>
         <button>About</button>
         </NavLink>
         <NavLink to={"/home"}>
         <button>Home</button>
         </NavLink>
         <NavLink to={"/favorites"}>
            <button>Favorites</button>
         </NavLink>

          <input type='search' onChange={changeHandler} value={id} />
          <button className="bus" onClick={()=>{onSearch(id)}}>Agregar</button>
       </div>
    );
 }




 
 //https://rym2-production.up.railway.app/api/character/$%7Bid%7D?key=henrym-usuariodegithub