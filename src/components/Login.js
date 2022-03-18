import React from "react";
import Layout from "./Pages/Layout";
import { useState } from "react";
import {  TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";


function Login() {
 const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  

  function handleClick(e){
    e.preventDefault()
    const login = {username,password}
    console.log(login)
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(login)
    }).then(() => {
      console.log("Logged in")
    })
  }
   

  return (
    <Layout>
      <center>
        <fieldset>
            <legend>Logowanie</legend>
            <h2><label>Login</label></h2> 
             <TextField
                value={username}
                onChange={(e) => setusername(e.target.value)}
                label="Nazwa użytkownika" variant="outlined"
              /><br></br>
              <h2><label>Hasło</label></h2> 
              <TextField
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                label="Hasło" variant="outlined" input type="password"
              /><br>
              </br>
            
           <br></br> <Button variant="contained" color="secondary" onClick={handleClick}>Zaloguj się</Button>
         </fieldset></center>
          <div>
          <center>
            <p>
              Nie posiadasz jeszcze konta? <br></br>
              <span>
                <Link to="../SignUp">Zarejestruj się </Link>
              </span>
            </p>
            
            <p>
              Nie pamiętasz hasła?<br></br>
              <span>
                <Link to="../ResetPassword">Resetowanie hasła </Link>
              </span>
            </p>

            <p>
              Chcesz zmienić hasło?<br></br>
              <span>
                <Link to='../ChangePassword'>Zmiana hasła </Link>
              </span>
            </p>
            </center>
          </div>
     
    </Layout>
    
  );
}

export default Login;
