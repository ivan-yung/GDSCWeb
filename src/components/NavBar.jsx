import React, { useState } from 'react';
import logo from '../img/gdsclogo.png'
import '../styles/Navbar.css';

const Navbar = () => {
  // useState to track if menu has been opened
  const [isOpen, setIsOpen] = useState(false);

  // handles menu opening and closing
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
        <nav className="navbar">
            <div className="logo">
                <img className="gdsclogo" src={logo}/>
            </div>
            <div className={`nav-items ${isOpen ? 'open' : ''}`}>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
                <a href="#" className="joinbutton">Join</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
  );
};

export default Navbar;
