import axios from "axios";
import React,{ useState, useEffect} from "react";
import { useParams, } from "react-router-dom";

function Detail() {
   const [character, setCharacter] = useState([]);
   const {id} = useParams();
useEffect(() => {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacter(data);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  });
  return setCharacter({});
}, []);




    return (
      
      <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin?.name}</p>
      </div>
      
    );
  };

  export default Detail;