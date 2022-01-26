import React from 'react';
import '../../App.css';
import SignUp from './SignUp';
import Footer from '../Footer';
import Navbar from '../Navbar';

function SignUpPage() {
  return (
    <>
    {<Navbar/>}
      {<SignUp />}
      {<Footer />}
    </>
  );
}

export default SignUpPage;