import Frontlinelogo from '../assets/images/FrontlineLogo.png'
import { Link } from 'react-router-dom';

import './Header.css'
import { useState } from 'react';

export function Header() {
    const[isPopupOpen, setIsPopupOpen] = useState(false);
      
    const openPopup = () => {
      setIsPopupOpen(true);
    }
    const closePopup = () => {
      setIsPopupOpen(false);
    };

    return (
        <div className = "header ">
      <div className= "header-left">
        <img src={Frontlinelogo} alt="Frontline Logo" className='logo'/>        
      </div>

      <div className="header-right"> 
        <nav className="nav-links">
          
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>

        </nav>
                  
        <button className="job-button"> <span className="blink-text"> Job-Opening </span> </button>
        <button className="hamburger" onClick={openPopup}>&#9776;</button>

        {isPopupOpen && (
          <div className="popup-overlay">
             <button className="close-btn" onClick={closePopup}>&times;</button> 
            <div className="popup">
                <Link to="/"  onClick={closePopup} >Home</Link>
                <Link to="/About" onClick={closePopup}>About</Link>
                <Link to="/services"  onClick={closePopup}>Services</Link>
                <Link to="/careers" onClick={closePopup}>Careers</Link>
                <Link to="/contact"  onClick={closePopup}>Contact</Link>
            </div>
          </div>  
        ) } 
      </div> 
    </div>
    )
  }
