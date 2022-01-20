import React from 'react';
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { Container, Paper, TextField, Button } from "@material-ui/core";
import "../css/auth.css";

function HomePage() {
  return (<Layout>
      <nav>
         <h1>FlyHigh</h1>
      </nav>
      <div className="auth_bottom">
            <p>
              Dołącz do nas  
              <span>
                <Link to="../Login">Zaloguj się </Link>
              </span>
            </p>
          </div>
      </Layout>
  )
}

export default HomePage;
