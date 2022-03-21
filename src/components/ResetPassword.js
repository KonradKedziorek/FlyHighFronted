import React from 'react'
import { useState } from 'react'
import{ TextField, Button} from '@material-ui/core'
import Layout from './Pages/Layout'

function handleClick(e){
    e.preventDefault()
    const userEmail = {email}
    console.log(email)
    fetch("http://localhost:8080/resetPassword", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userEmail)
    }).then(() => {
      console.log("Mail sent")
    })
  }

const ResetPassword = () => {
    const [email, setemail]=useState('')
    return (
        <Layout>
            <fieldset>
                    <legend>Konto:</legend>
                    <center>
                    <h2><label>Podaj adres mail, na który założyłeś konto</label></h2>
                        <TextField value={email}
                        onChange={(e)=>setemail(e.target.value)}
                        label="Podaj adres mail, na który założyłeś konto" variant="outlined"
                        /><br></br>
                    </center>
                   
                  <br></br> <center> <Button variant="contained" color="secondary"  onClick={handleClick} >Resetuj hasło</Button></center><br></br>
                
            </fieldset><br></br>
           
        </Layout>
    )
}

export default ResetPassword