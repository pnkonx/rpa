import React, {useState} from 'react';
import {Link} from'react-router-dom';
import {FaYoutube} from 'react-icons/fa';

import './Navabar.css'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {setClick(!click)};
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
           <Link to='/' className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
           </Link>
           <FaYoutube  className='icons youtube'/>
           
           <Link to='/' className="navbar-logo">
            TRVL <i className='icon fa-solid fa-bars'></i>
           </Link>
           <Link to='/' className="navbar-logo">
            TRVL <i className='icon fas fa-bars'></i>
           </Link>
           <div className='menuIcon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
           <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-link' onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-link' onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
           </ul>
           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
           
        </div>

      
    </nav>
  )
}

export default Navbar
