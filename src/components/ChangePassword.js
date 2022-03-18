import React from "react"
import Layout from "./Pages/Layout"
import { useState } from "react"
import {  TextField, Button } from "@material-ui/core"
import { useAlert } from 'react-alert'


 function ChangePassword  ()  {
    const [newPassword, setNewPassword ]=useState("");
    const [confirmNewPassword, setConfirmNewPassword ]=useState("");
    
    function showAlert(){
          if(newPassword!==confirmNewPassword){
            alert("Hasła muszą być takie same!");
          }
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
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    label="Hasło" variant="outlined" input type="password"
                  /><br>
                  </br>
                 
                
               <br></br> <Button variant="contained" color="secondary" onClick={showAlert} >Zmień hasło</Button>
             </fieldset></center><br></br>
        </Layout>
    );
}

export default ChangePassword;