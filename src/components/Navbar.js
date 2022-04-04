import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch } from 'react-redux';

import {fetchUserData} from '../services/LoginServices';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //const dispatch=useDispatch();
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState({});
  React.useEffect(()=>{
    fetchUserData().then((response)=>{
        setData(response.data);
    }).catch((e)=>{
        localStorage.clear();
        
    })
},[])
  

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FLYHIGH
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
            
            <Link to='/EditPersonalData' className='nav-links' onClick={closeMobileMenu}>
                Dane Osobowe
              </Link>
              
            </li> 
            <li className='nav-item'>
            
            <p>Hello {data && `${data.name} ${data.surename}`}</p>
              
            </li> 
            
            <li>
              <Link 
              to='/Login'
               className='nav-links-mobile'
                onClick={closeMobileMenu}
                >
                    Zaloguj się
                </Link>
            </li>  

          </ul>
          {button && <Button buttonStyle='btn--outline'>Zaloguj się</Button>}  


          
        </div>
      </nav>
    </>
  );
}

export default Navbar;