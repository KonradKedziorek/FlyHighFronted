import React from 'react';
import '../../App.css';
import EditPersonalData from '../EditPersonalData'
import Footer from '../Footer';
import Navbar from '../Navbar';


function EditPersonalDataPage() {
  return (
    <>
    {<Navbar/>}
    {<EditPersonalData/>}
    {<Footer />}
    </>
  );
}

export default EditPersonalDataPage;
