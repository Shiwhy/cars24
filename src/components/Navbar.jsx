import React from 'react';
import './css/navbar.css';

import { NavLink } from 'react-router-dom';

import logoCar from '../assets/logoCar.png';
import logoText from '../assets/logoText.png';

import { TbHomeMove } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const Navbar = () => {

  return (
    <>
    <div id="container">
      <nav>
        <div className="navbar-carLogo">
          <img src={ logoCar } alt="/" />
        </div>
        <div className="navbar-textLogo">
          <img src={ logoText } alt="/" />
        </div>

        <div className="links">
          <li>
            <NavLink to='/home'>
              <TbHomeMove/> Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>
              <MdOutlineDashboardCustomize/> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/jobcard'>
              <LuClipboardCheck/> Jobcard
            </NavLink>
          </li>
          <li>
            <NavLink>
              <LiaFileInvoiceDollarSolid/> Invoice
            </NavLink>
          </li>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
