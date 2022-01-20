import React from "react";
import Layout from "./Layout";
import { useState } from "react";
import { Container, Paper, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/auth.css";

function Login() {
  const [username, setusername] = useState("");
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
            <Button>Zaloguj się</Button>
          </div>
          <div>
            <p>
              Nie posiadasz jeszcze konta? 
              <span>
                <Link to="../SignUp">Zarejestruj się </Link>
              </span>
            </p>
            <p>
              Nie pamiętasz hasła?
              <span>
                <Link to="../ResetPassword">Resetowanie hasła </Link>
              </span>
            </p>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
}

export default Login;
