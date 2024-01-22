import React from 'react';
import './css/footer.css';

import { IoCarSport } from 'react-icons/io5';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";
import { RiCalendarCloseFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <div id="container">
      <footer>
        <div className="logo">
          <span className="icon">
            <IoCarSport/>
          </span>
          <p>GARAGE</p>
        </div>

        <div className="contact">
          <h2>CONTACT</h2>
          <div className="details">
            <span><BiSolidPhoneCall/></span>
            <p>+91 9876543210</p>
          </div>
          <div className="details">
            <span><IoIosMail/></span>
            <p>garage@gmail.com</p>
          </div>
          <div className="details">
            <span><FaLocationDot/></span>
            <p>30, Auto Workshop, Garage Street</p>
          </div>
        </div>

        <div className="business">
          <h2>BUSINESS HOUR</h2>
          <div className="details">
            <span><AiFillClockCircle/></span>
            <p>24hours open</p>
          </div>
          <div className="details">
            <span><RiCalendarCloseFill/></span>
            <p>Closed on Sunday</p>
          </div>
        </div>

        <div className="carSlowgan">
          <p>
            we will <br /> take care <br /> of your car
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer
