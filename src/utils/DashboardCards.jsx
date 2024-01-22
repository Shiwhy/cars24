import React from 'react';
import './css/dashboardcards.css';


const DashboardCards = ( props ) => {
  return (
    <>
    <div id="container">
      <div className="card">
        <span>{ props.icon }</span>
        <p className='cardTitle'>{ props.title }</p>
        <p className='cardValue'>{ props.value }</p>
      </div>
    </div>
    </>
  )
}

export default DashboardCards
