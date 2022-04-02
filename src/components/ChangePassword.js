import React from "react"
import Layout from "./Pages/Layout"
import { useState } from "react"
import {  TextField, Button } from "@material-ui/core"
import { useAlert } from 'react-alert'


 function ChangePassword  ()  {
    const [newPassword, setNewPassword ]=useState("");
    const [repeatedNewPassword, setRepeatedNewPassword ]=useState("");
    
    function showAlert(e){
      e.preventDefault()
          if(newPassword!==repeatedNewPassword){
            alert("Hasła muszą być takie same!");
          }else handleClick();
     }

     function handleClick(){
      var currentUrl = window.location.href;
      var startIndexToken = currentUrl.indexOf('token=') + 6;
      var lastIndexToken = currentUrl.length;
      var token = currentUrl.substring(startIndexToken, lastIndexToken)
      console.log(token)
      const resetPasswordRequest = {newPassword, repeatedNewPassword}
      console.log(resetPasswordRequest)
      fetch("http://localhost:8080/newPassword?token=" + token, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(resetPasswordRequest)
      }).then(() => {
        console.log("Password changed")
      })
    }

    return (
        <Layout>
          <center>
            <fieldset>
                <legend>Zmiana hasła</legend>
                <h2><label>Nowe hasło</label></h2> 
                 <TextField
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    label="Nowe hasło" variant="outlined" input type="password"
                  /><br></br>
                  <h2><label>Powtórz hasło</label></h2> 
                  <TextField
                    value={repeatedNewPassword}
                    onChange={(e) => setRepeatedNewPassword(e.target.value)}
                    label="Hasło" variant="outlined" input type="password"
                  /><br>
                  </br>
                 
                
               <br></br> <Button variant="contained" color="secondary" onClick={showAlert} >Zmień hasło</Button>
             </fieldset></center><br></br>
        </Layout>
    );
}

export default ChangePassword;