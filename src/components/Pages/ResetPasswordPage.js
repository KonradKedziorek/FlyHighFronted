import React from 'react';
import '../../App.css';
import ResetPassword from '../ResetPassword'
import Footer from '../Footer';
import Navbar from '../Navbar';

function ResetPasswordPage() {
  return (
    <>
    {<Navbar/>}
      {<ResetPassword/>}
      {<Footer />}
    </>
  );
}

export default ResetPasswordPage;