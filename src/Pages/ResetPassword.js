import React from 'react'
import { useState } from 'react'
import{Container, Paper, TextField, Button} from '@material-ui/core'
import Layout from './Layout'
import '../css/auth.css'

const ResetPassword = () => {
    const [mail, setmail]=useState('')
    return (
        <Layout>
        <Container className="auth-container">
            <Paper className="auth">
                <div>
                    <h5>Reset Password</h5>
                </div>
                <div>
                    <form>
                        <TextField value={mail}
                        onChange={(e)=>setmail(e.target.value)}
                        label="Enter mail which you log in"
                        />
                    </form>
                   
                    <Button>Reset Password</Button>
                </div>
                
            </Paper>
        </Container>
    </Layout>
    )
}

export default ResetPassword