import React from "react";
import Layout from "./Pages/Layout";
import { useState } from "react";
import {  TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { authenticate, authFailure, authSuccess } from '../redux/authActions';


const Login=({loading,error,...props})=> {
 const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

    
  

  function handleClick(e){
    props.authenticate();
    e.preventDefault()
    const login = {username,password}
    console.log(login)
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(login)
    }).then((response) => response.json())
    .then(json => {
      window.localStorage.setItem("TOKEN_KEY", json.jwtToken);
      let item = localStorage.getItem("TOKEN_KEY");
      console.log(item);
    })
    .catch(error => {
      console.log("Error")
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

const mapStateToProps=({auth})=>{
  console.log("state ",auth)
  return {
      loading:auth.loading,
      error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

  return {
      authenticate :()=> dispatch(authenticate()),
      setUser:(data)=> dispatch(authSuccess(data)),
      loginFailure:(message)=>dispatch(authFailure(message))
  }
}

export default Login;
