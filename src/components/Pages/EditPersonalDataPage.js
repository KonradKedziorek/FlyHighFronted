import React, { useEffect, useState } from 'react';
import '../../App.css';
import EditPersonalData from '../EditPersonalData'
import Footer from '../Footer';
import Navbar from '../Navbar';


function EditPersonalDataPage() {

  const [name, setname] = useState("");
    const [middleName, setmiddleName] = useState("");
    const [surname, setsurname] = useState("");
    const [country, setcountry] = useState("");
    const [city, setcity] = useState("");
    const [street, setstreet] = useState("");
    const [email, setemail] = useState("");
    const [bankAccount, setbankAccount] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [houseNumber, sethouseNumber] = useState("");
    const [zipCode, setzipCode] = useState("");

   useEffect(() => {
    const EditPD = {name,middleName,surname,country,city,street,email,phoneNumber,houseNumber,zipCode,bankAccount}
    let item = localStorage.getItem("TOKEN_KEY");
    let token = "Bearer " + item 
    fetch("http://localhost:8080/EditPersonalData", {
      method: "GET",
      headers: {"Content-Type": "application/json", "Authorization": token}
    }).then((response) => response.json()
    ).then(json => {
      localStorage.setItem("personal_Data", JSON.stringify(json))
        setname(json.name)
        setmiddleName(json.middleName)
        setsurname(json.surname)
        setcountry(json.country)
        setcity(json.city)
        setstreet(json.street)
        setemail(json.email)
        setphoneNumber(json.phoneNumber)
        sethouseNumber(json.houseNumber)
        setzipCode(json.zipCode)
        setbankAccount(json.bankAccount)
      })
      .finally( () => {
        console.log("Dane: " + EditPD)
      })
   },[])

  return (
    <>
    {<Navbar/>}
    {<EditPersonalData/>}
    {<Footer />}
    </>
  );
}

export default EditPersonalDataPage;
