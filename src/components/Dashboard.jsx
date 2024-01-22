import React from 'react';
import './css/dashboard.css';

import Navbar from './Navbar'
import DashboardCards from '../utils/DashboardCards';

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoCarSport } from 'react-icons/io5';
import { FaUsers, FaIndianRupeeSign  } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";
import { TbSettingsCog, TbTruckDelivery } from "react-icons/tb";
import { LuClipboardCheck } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";


const Dashboard = () => {
  return (
    <>
    <div id="container">
      <div className="dashboardNavbar">
        <Navbar/>
      </div>
      <div className="dashboard">
        <div className="dashboard-title">
          <h2><MdOutlineDashboardCustomize/> Dashboard</h2>
          
          <h3>
            Driven By passion, <br />
            fueled by expertise.
          </h3>
        </div>
        <div className="dashboard-cards">
          <div className="row">
            <DashboardCards icon={ <IoCarSport/> } title='Total Vehicles' value='0' />
            <DashboardCards icon={ <FaUsers/> } title='Total Customers' value='0' />
            <DashboardCards icon={ <GrUserWorker/> } title='Total Employees' value='0' />
          </div>
          <div className="row">
            <DashboardCards icon={ <MdPendingActions/> } title='Pending Work' value='0' />
            <DashboardCards icon={ <TbSettingsCog/> } title='Total Stock' value='0' />
            <DashboardCards icon={ <TbTruckDelivery/> } title='Pending Delivery' value='0' />
          </div>
          <div className="row">
            <DashboardCards icon={ <FaIndianRupeeSign /> } title='Remaining Payment' value='0' />
            <DashboardCards icon={ <LuClipboardCheck/> } title='Jobcards' value='0' />
            <DashboardCards icon={ <VscFeedback/> } title='Feedback' value='0' />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
