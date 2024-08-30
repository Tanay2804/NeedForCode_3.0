import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import navlogo from '../Assets/logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='navbarmain'>
            <div><img src={navlogo} alt="Logo" id='navlogo' /></div>
            <div className='navtags'>
                <p id='navp' onClick={() => handleScroll('titlemain')}>Home</p>
                <p id='navp' onClick={() => handleScroll('impmain')}>About Us</p>
                <p id='navp' onClick={() => handleScroll('tiera')}>Sponsor Us</p>
                <p id='navp' onClick={() => handleScroll('footermain')}>Contact Us</p>
            </div>
            <div className='navbarbtns'>
                <button id='navlogin' onClick={() => navigate('/login')}><strong>Login</strong></button>
                <button id='navsign' onClick={() => navigate('/signup')}><strong>Sign Up</strong></button>
            </div>
        </div>
    );
}

export default Navbar;
