import React from 'react'
import { useState } from 'react'
import{TextField, Button} from '@material-ui/core'
import Layout from './Pages/Layout'



const EditPersonalData = () => {
  let personalData = JSON.parse(localStorage.getItem("personal_Data"));

  const [name, setname] = useState(personalData.name);
  const [middleName, setmiddleName] = useState(personalData.middleName);
  const [surname, setsurname] = useState(personalData.surname);
  const [country, setcountry] = useState(personalData.country);
  const [city, setcity] = useState(personalData.city);
  const [street, setstreet] = useState(personalData.street);
  const [email, setemail] = useState(personalData.email);
  const [bankAccount, setbankAccount] = useState(personalData.bankAccount);
  const [phoneNumber, setphoneNumber] = useState(personalData.phoneNumber);
  const [houseNumber, sethouseNumber] = useState(personalData.houseNumber);
  const [zipCode, setzipCode] = useState(personalData.zipCode);
  console.log(name)

  function handleClick(e){
      e.preventDefault()
      const EditPD = {name,middleName,surname,country,city,street,email,phoneNumber,houseNumber,zipCode,bankAccount}
      let item = localStorage.getItem("TOKEN_KEY");
      let token = "Bearer " + item;
      fetch("http://localhost:8080/user/saveChangedData", {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": token, "Access-Control-Request-Method": "POST"},
        body: JSON.stringify(EditPD)
      }).then(() => {
        console.log("User Data change")
      })
    }

    return (
        <Layout>
        <fieldset>
        <legend>Konto:</legend>
        <center>
        <h2><label>E-mail</label></h2><TextField id="emaillabel" label="E-mail" variant="outlined" value={email} onChange={(e) => setemail(e.target.value)}/><br></br>
        <h2><label>Telefon</label></h2><TextField id="phoneNumberlabel" label="Telefon" variant="outlined" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} /><br></br>
        <h2><label>Konto Bankowe</label></h2><TextField id="BankAccountNumberlabel" label="Numer Konta Bankowego" variant="outlined" 
        value={bankAccount} onChange={(e) => setbankAccount(e.target.value)}/><br></br>
     </center>
         </fieldset>

         <fieldset>
        <legend>Dane Osobowe:</legend>
        <center>
        <h2> <label>Imię</label></h2> <TextField id="namelabel" label="Imię" variant="outlined" value={name} onChange={(e) => setname(e.target.value)}/><br></br>
        <h2><label>Drugie Imię</label></h2><TextField id="middleNamelabel" label="Drugie Imię" variant="outlined" value={middleName} onChange={(e) => setmiddleName(e.target.value)}/><br></br>
        <h2><label>Nazwisko</label></h2><TextField id="surnamelabel" label="Nazwisko" variant="outlined" value={surname} onChange={(e) => setsurname(e.target.value)}/><br></br>
        </center>
         </fieldset>

         <fieldset>
        <legend>Adres:</legend>
        <center>
        <h2><label>Ulica</label></h2><TextField id="streetlabel" label="Ulica" variant="outlined" value={street} onChange={(e) => setstreet(e.target.value)}/><br></br>
        <h2><label>Numer Domu</label></h2><TextField id="houseNumberlabel" label="Numer Domu" variant="outlined" value={houseNumber} onChange={(e) => sethouseNumber(e.target.value)}/><br></br>
        <h2><label>Miasto</label></h2><TextField id="citylabel" label="Miasto" variant="outlined" value={city} onChange={(e) => setcity(e.target.value)}/><br></br>
        <h2><label>Kraj</label></h2><TextField id="countrylabel" label="Kraj" variant="outlined" value={country} onChange={(e) => setcountry(e.target.value)}/><br></br>
        <h2><label>Kod Pocztowy</label></h2><TextField id="zipCodelabel" label="Kod Pocztowy" variant="outlined" value={zipCode} onChange={(e) => setzipCode(e.target.value)}/><br></br>
        </center>
         </fieldset>
         <center><br></br><Button id="AddressButton" variant="contained" color="secondary" onClick={handleClick}>Zatwierdź</Button></center><br></br>
    </Layout>
    )
}

export default EditPersonalData