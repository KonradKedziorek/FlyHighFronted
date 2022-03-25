import React from 'react';
import '../../App.css';
import SearchFly from '../SearchFly';
import Footer from '../Footer';
import Navbar from '../Navbar';

function SearchFlyPage() {
  return (
    <>
    {<Navbar/>}
      {<SearchFly />}
      {<Footer />}
    </>
  );
}

export default SearchFlyPage;