import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ChangePassword from '../ChangePassword';

function ChangePasswordPage() {
  return (
    <>
    {<Navbar/>}
      {<ChangePassword/>}
      {<Footer />}
    </>
  );
}

export default ChangePasswordPage;