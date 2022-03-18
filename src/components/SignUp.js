import React, { useState } from "react";
import Layout from "./Pages/Layout";
import {  TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";



  function SignUp() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [pesel, setpesel] = useState("");
  const [name, setname] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [surname, setsurname] = useState("");
  const [bankAccount, setbankAccount] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [street, setstreet] = useState("");
  const [houseNumber, sethouseNumber] = useState("");
  const [zipCode, setzipCode] = useState("");

  function handleClick(e){
    e.preventDefault()
    const signUp = {username,password,phoneNumber,email,pesel,name,middleName,surname,bankAccount,country,city,street,houseNumber,zipCode}
    console.log(signUp)
    fetch("http://localhost:8080/user/signUp", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(signUp)
    }).then(() => {
      console.log("New user added")
    })
  }
  
  return (
    <Layout>
     <fieldset>
     
        <legend>Konto:</legend>
        <center>
        <h2><label>Nazwa użytkownika</label></h2>
              <TextField
                value={username}
                onChange={(e) => setusername(e.target.value)}
                label="Podaj nazwę użytkownika" variant="outlined"
              /><br></br>
            <h2><label>Hasło</label></h2>
              <TextField
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                label="Podaj hasło" variant="outlined" input type="password"
              /><br></br>
           <h2><label>numer telefonu</label></h2>
              <TextField
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
                label="Podaj numer telefonu" variant="outlined"
              /><br></br>
           <h2><label>E-mail</label></h2>
              <TextField
                value={email}
                onChange={(e) => setemail(e.target.value)}
                label="Podaj mail" variant="outlined"
              /><br></br>
           <h2><label>PESEL</label></h2>
              <TextField
                value={pesel}
                onChange={(e) => setpesel(e.target.value)}
                label="Podaj numer PESEL" variant="outlined"
              /><br></br>
           <h2><label>Imię</label></h2>
              <TextField
                value={name}
                onChange={(e) => setname(e.target.value)}
                label="Podaj imię" variant="outlined"
              /><br></br>
           <h2><label>Drugie imię</label></h2>
              <TextField
                value={middleName}
                onChange={(e) => setmiddleName(e.target.value)}
                label="Podaj drugie imię (opcjonalne)" variant="outlined"
              /><br></br>
           <h2><label>Nazwisko</label></h2>
              <TextField
                value={surname}
                onChange={(e) => setsurname(e.target.value)}
                label="Podaj nazwisko" variant="outlined"
              /><br></br>
            <h2><label>Konto Bankowe</label></h2>
              <TextField
                value={bankAccount}
                onChange={(e) => setbankAccount(e.target.value)}
                label="Podaj numer konta bankowego" variant="outlined"
              /><br></br>
            <h2><label>Kraj</label></h2>
              <TextField
                value={country}
                onChange={(e) => setcountry(e.target.value)}
                label="Podaj kraj" variant="outlined"
              /><br></br>
            <h2><label>Miasto</label></h2>
              <TextField
                value={city}
                onChange={(e) => setcity(e.target.value)}
                label="Podaj miasto" variant="outlined"
              /><br></br>
           <h2><label>Ulica</label></h2>
              <TextField
                value={street}
                onChange={(e) => setstreet(e.target.value)}
                label="Podaj ulicę" variant="outlined"
              /><br></br>
            <h2><label>Numer domu</label></h2>
              <TextField
                value={houseNumber}
                onChange={(e) => sethouseNumber(e.target.value)}
                label="Podaj numer domu" variant="outlined"
              /><br></br>
            <h2><label>Kod pocztowy</label></h2>
              <TextField
                value={zipCode}
                onChange={(e) => setzipCode(e.target.value)}
                label="Podaj kod pocztowy" variant="outlined"
              /><br></br>
          
            
            <br></br>
            <Button variant="contained" color="secondary" onClick={handleClick}>Zarejestruj</Button>
            </center>
            </fieldset>
          <div className="auth_bottom">
            <center>
            <p>
              Posiadasz już konto? <br></br>
              <span>
                <Link to="../Login">Zaloguj się </Link>
              </span>
            </p>
            </center>
          </div>
      </Layout>
  );
}

export default SignUp;
