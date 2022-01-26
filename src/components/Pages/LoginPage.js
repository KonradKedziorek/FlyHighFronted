import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Login from './Login';

function LoginPage() {
  return (
    <>
    {<Navbar/>}
      {<Login/>}
      {<Footer />}
    </>
  );
}

export default LoginPage;