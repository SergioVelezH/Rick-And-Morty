import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { Route ,Routes, useLocation, useNavigate } from "react-router-dom";
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';




function App() {
   const [characters, setCharacters] = useState([]);

function searchHanlder(id){
      axios(
         `https://rickandmortyapi.com/api/character/${id}`  ).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

function closeHandler(id){
   let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
   );
   setCharacters(filteredCharacters);
}   

const location = useLocation();



const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = "ejemplo@gmail.com";
const PASSWORD = "unaPassword2";

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
   }
};


useEffect(() => {
   !access && navigate("/");
}, [access]);
   



   return (
      <div className='App'>
      {location.pathname !== '/' &&  <Nav className="entry" onSearch={searchHanlder}  />} 
      <Routes>
         <Route path="/" element={<Form login ={login}/>}/>
         <Route path="/home" element= {<Cards characters={characters} closeHandler ={closeHandler}/>} />
         <Route path="/about" element= {<About/>} /> 
         <Route path="/detail/:id" element= {<Detail/>}/>
         <Route path="/favorites" element= {<Favorites/>} /> 
      </Routes>
      </div>
   );
}

export default App;

