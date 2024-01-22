import React from 'react';
import './css/homeServices.css';


const HomeServices = (props) => {
  return (
    <>
    <div id="container">
      <div className="services">
        <div className="icon">
          {props.icon}
        </div>
        <p>{props.title}</p>
      </div>
    </div>
    </>
  )
}

export default HomeServices
