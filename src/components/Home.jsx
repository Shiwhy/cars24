import React from 'react';
import './css/home.css';
import Navbar from './Navbar';

import homeMechanic from '../assets/Home Section/homeMechanic.jpg'
import homeMechanic2 from '../assets/Home Section/homeMechanic2.jpg'
import HomeServices from '../utils/HomeServices';

import { GiMechanicGarage } from "react-icons/gi";
import Footer from './Footer';


const Home = () => {
  return (
    <>
    <div id="container">
      <div className="homeNavbar">
        <Navbar/>
      </div>

      <div className="homePage">
        <div className="firstPage">
          <h1>
            Welcome<br /> 
            To The<br /> 
            Garage
          </h1>
        </div>

        <div className="secondPage">
          <h3 className="heading">
            Who we are?
          </h3>
          <div className="secondPage-content">
            <div className="contentOne-image">
              <img src={ homeMechanic } alt="/" />
            </div>
            <div className="contentTwo-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde, vitae, excepturi modi in reiciendis suscipit cumque non velit ipsam consequuntur accusantium amet saepe voluptatem harum iusto officia rerum, animi assumenda. Id explicabo vel a quibusdam! Dolorum, odio ex totam veritatis fugit, iusto odit, quibusdam aliquam veniam ipsam nihil optio praesentium animi? Laudantium culpa illo pariatur aperiam! Architecto adipisci ab commodi iste nam nulla porro? Saepe labore, exercitationem quia error possimus quae quidem quo voluptates reprehenderit ad maxime in numquam, impedit, voluptatibus obcaecati enim reiciendis fugit nobis minus fugiat sequi eos veniam. Officiis, totam adipisci dolores distinctio ipsam cupiditate excepturi magnam corrupti debitis temporibus eos aliquid, molestiae laudantium voluptatum dolorum expedita laboriosam vero eveniet illo nemo dolorem culpa. Amet explicabo ducimus iusto facilis quas! Laborum exercitationem explicabo rerum temporibus veniam repellendus nemo? Magni placeat accusamus eos voluptatem accusantium? Repellat necessitatibus quasi deserunt non reiciendis provident impedit. Quaerat reiciendis itaque similique?</p>
            </div>
          </div>

          <h3 className="heading">
            What we do?
          </h3>
          <div className="secondPage-content">
            <div className="contentTwo-image">
              <img src={ homeMechanic2 } alt="/" />
            </div>
            <div className="contentTwo-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde, vitae, excepturi modi in reiciendis suscipit cumque non velit ipsam consequuntur accusantium amet saepe voluptatem harum iusto officia rerum, animi assumenda. Id explicabo vel a quibusdam! Dolorum, odio ex totam veritatis fugit, iusto odit, quibusdam aliquam veniam ipsam nihil optio praesentium animi? Laudantium culpa illo pariatur aperiam! Architecto adipisci ab commodi iste nam nulla porro? Saepe labore, exercitationem quia error possimus quae quidem quo voluptates reprehenderit ad maxime in numquam, impedit, voluptatibus obcaecati enim reiciendis fugit nobis minus fugiat sequi eos veniam. Officiis, totam adipisci dolores distinctio ipsam cupiditate excepturi magnam corrupti debitis temporibus eos aliquid, molestiae laudantium voluptatum dolorum expedita laboriosam vero eveniet illo nemo dolorem culpa. Amet explicabo ducimus iusto facilis quas! Laborum exercitationem explicabo rerum temporibus veniam repellendus nemo? Magni placeat accusamus eos voluptatem accusantium? Repellat necessitatibus quasi deserunt non reiciendis provident impedit. Quaerat reiciendis itaque similique?</p>
            </div>
          </div>
        </div>

        <div className="thirdPage">
          <h3 className="heading">
            Our Services
          </h3>
          <div className="homeServices">
            <div className="row">
              <HomeServices icon={ <GiMechanicGarage/> } title='Smart Services' />
              <HomeServices icon={ <GiMechanicGarage/> } title='Smart Services' />
              <HomeServices icon={ <GiMechanicGarage/> } title='Smart Services' />
            </div>
            <div className="row">
              <HomeServices icon={ <GiMechanicGarage/> } title='Smart Services' />
              <HomeServices icon={ <GiMechanicGarage/> } title='Smart Services' />
              <HomeServices icon={ <GiMechanicGarage/> } title='Smart Services' />
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;