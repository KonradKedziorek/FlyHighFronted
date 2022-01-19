import React, { useState } from "react";
import Layout from "./Layout";
import { Container, Paper, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/auth.css";

function SignUp() {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [lastname, setlastname] = useState("");
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
                value={mail}
                onChange={(e) => setmail(e.target.value)}
                label="Enter mail"
              />
            </form>
            <form>
              <TextField
                value={name}
                onChange={(e) => setname(e.target.value)}
                label="Enter name"
              />
            </form>
            <form>
              <TextField
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                label="Enter lastname"
              />
            </form>
            <form>
              <TextField
                value={phoneNo}
                onChange={(e) => setphoneNo(e.target.value)}
                label="Enter phone number"
              />
            </form>
            <form>
              <TextField
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                label="Enter passsword"
              />
            </form>
            <Button>Sign up</Button>
          </div>
          <div className="auth_bottom">
            <p>
              Already have an account
              <span>
                <Link to="./Login">Log in </Link>
              </span>
            </p>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
}

export default SignUp;
