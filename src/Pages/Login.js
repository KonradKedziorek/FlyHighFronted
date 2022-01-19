import React from "react";
import Layout from "./Layout";
import { useState } from "react";
import { Container, Paper, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/auth.css";

function Login() {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <Layout>
      <Container className="auth-container">
        <Paper className="auth">
          <div className="auth_header">
            <h5>Create Login</h5>
          </div>
          <div>
            <form className="auth_form">
              <TextField
                value={mail}
                onChange={(e) => setmail(e.target.value)}
                label="Enter mail"
              />
            </form>
            <form>
              <TextField
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                label="Enter passsword"
              />
            </form>
            <Button>Log in</Button>
          </div>
          <div>
            <p>
              Dont have account yet
              <span>
                <Link to="../SignUp">Sign Up </Link>
              </span>
            </p>
            <p>
              Dont remember passord
              <span>
                <Link to="../ResetPassword">Reset Password </Link>
              </span>
            </p>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
}

export default Login;
