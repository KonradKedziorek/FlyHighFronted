import React from 'react';
import '../../App.css';
import SearchFlight from '../SearchFlight';
import Footer from '../Footer';
import Navbar from '../Navbar';

function SearchFlightPage() {
  return (
    <>
    {<Navbar/>}
      {<SearchFlight />}
      {<Footer />}
    </>
  );
}

export default SearchFlightPage;