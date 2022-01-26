import React, { useState } from "react";
import Layout from "./Layout";
import { Container, Paper, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";



  function SignUp() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [mail, setmail] = useState("");
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
    const signUp = {username,password,phoneNumber,mail,pesel,name,middleName,surname,bankAccount,country,city,street,houseNumber,zipCode}
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
      <Container className="auth-container">
        <Paper className="auth">
          <div className="auth_header">
            <h5>Create account</h5>
          </div>
          <div className="auth_form">
            <form>
              <TextField
                value={username}
                onChange={(e) => setusername(e.target.value)}
                label="Podaj nazwę użytkownika"
              />
            </form>
            <form>
              <TextField
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                label="Podaj hasło"
              />
            </form>
            <form>
              <TextField
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
                label="Podaj numer telefonu"
              />
            </form>
            <form>
              <TextField
                value={mail}
                onChange={(e) => setmail(e.target.value)}
                label="Podaj mail"
              />
            </form>
            <form>
              <TextField
                value={pesel}
                onChange={(e) => setpesel(e.target.value)}
                label="Podaj numer PESEL"
              />
            </form>
            <form>
              <TextField
                value={name}
                onChange={(e) => setname(e.target.value)}
                label="Podaj imię"
              />
            </form>
            <form>
              <TextField
                value={middleName}
                onChange={(e) => setmiddleName(e.target.value)}
                label="Podaj drugie imię (opcjonalne)"
              />
            </form>
            <form>
              <TextField
                value={surname}
                onChange={(e) => setsurname(e.target.value)}
                label="Podaj nazwisko"
              />
            </form>
            <form>
              <TextField
                value={bankAccount}
                onChange={(e) => setbankAccount(e.target.value)}
                label="Podaj numer konta bankowego"
              />
            </form>
            <form>
              <TextField
                value={country}
                onChange={(e) => setcountry(e.target.value)}
                label="Podaj kraj"
              />
            </form>
            <form>
              <TextField
                value={city}
                onChange={(e) => setcity(e.target.value)}
                label="Podaj miasto"
              />
            </form>
            <form>
              <TextField
                value={street}
                onChange={(e) => setstreet(e.target.value)}
                label="Podaj ulicę"
              />
            </form>
            <form>
              <TextField
                value={houseNumber}
                onChange={(e) => sethouseNumber(e.target.value)}
                label="Podaj numer domu"
              />
            </form>
            <form>
              <TextField
                value={zipCode}
                onChange={(e) => setzipCode(e.target.value)}
                label="Podaj kod pocztowy"
              />
            </form>
            
            
            <Button variant="contained" color="secondary" onClick={handleClick}>Zarejestruj</Button>
          </div>
          <div className="auth_bottom">
            <p>
              Posiadasz już konto? 
              <span>
                <Link to="../Login">Zaloguj się </Link>
              </span>
            </p>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
}

export default SignUp;
