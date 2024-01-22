import React from 'react';
import './css/landing.css';
import { useNavigate } from 'react-router-dom';

import logoCar from '../assets/logoCar.png'
import logoText from '../assets/logoText.png';

import { IoLogInOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";


const Landing = () => {

  const Navigate = useNavigate();

  return (
    <>
    <div id="container">
      <div className="landingPage">
        <div className="landingPage-logo">
          <div className="landingPage-carLogo">
            <img src={ logoCar } alt="/" />
          </div>
          <div className="landingPage-textLogo">
            <img src={ logoText } alt="/" />
          </div>
        </div>
        <div className="landingPage-button">
          <button onClick={() => Navigate('/login')}><IoLogInOutline/> Login</button>
          <button onClick={() => Navigate('/signup')}><FiUserPlus/> Sign Up</button>
        </div>
      </div>
    </div>
    </>
  )
}


export default Landing
