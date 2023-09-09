import { useState } from "react";
import { validar } from "../helpers/validations";


export default function Form({login}) {
const [userData, setUserData] = useState({
    email: "",
    password: "",
})

const [errors, setErrors] = useState({
    email: "", // gama@gmail.com
    password: "", //"La contrasena debe tener al menos 6 caracteres"
  });

function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(validar({...userData, [event.target.name]: event.target.value}))
};


function handleSumbit(event) {
    // envio input a la DB
    event.preventDefault();
    {login(userData)}
  };


    return (
      <form onSubmit={handleSumbit}>
        <label>
            <input type="email" name="email" placeholder="Email..."  onChange={handleChange} />
        </label>
        <span>{errors.email}</span>
        <label>
            <input type="password" name="password" placeholder="Contraseña..."  onChange={handleChange} />
        </label>
        <span>{errors.password}</span>
        {errors.email || errors.password ? null :(
        <button type="sumbit" onClick={handleSumbit}>Submit</button>
        )};
        
      </form>
    );
  }