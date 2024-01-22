import React from 'react';
import './css/jobcard.css';

import Navbar from './Navbar';

import { LuClipboardCheck } from "react-icons/lu";
import { RiSave3Line } from "react-icons/ri";


const Jobcard = () => {
  return (
    <>
    <div id="container">
      <div className="jobcardNavbar">
        <Navbar/>
      </div>

      <div className="jobcard">
        <div className="jobcardTitle">
          <h2><LuClipboardCheck/> Jobcard</h2>
        </div>
        <div className="jobcard-details">
          <div className="customer-details">
            <div className="detail-heading">
              Customer Details
            </div>

            <hr />

            <div className="row">
              <div className="column">
                <div className="details">
                  <p>Name: </p>
                  <input type="text" />
                </div>
                <div className="details">
                  <p>Contact: </p>
                  <input type="text" />
                </div>
                <div className="details">
                  <p>Email: </p>
                  <input type="text" />
                </div>
              </div>

              <div className="column">
                <div className="details">
                  <p>Address: </p> 
                  <textarea cols="30" rows="8"></textarea>
                </div>
              </div>

              <div className="column">
                <div className="details">
                  <p>Customer Status: </p>
                  <select>
                    <option value="0">Active</option>
                    <option value="1">In-active</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          <div className="mainDetails vehicle-details">
            <div className="detail-heading">
              Vehicle Details
            </div>

            <hr />

            <div className="row">
              <div className="column">
                <div className="details">
                  <p>Vehicle Type: </p>
                  <select>
                    <option value="0">Select</option>
                    <option value="0">Four Wheel</option>
                    <option value="0">Two Wheel</option>
                    <option value="0">Three Wheel</option>
                  </select>
                </div>
                <div className="details">
                <p>Fuel: </p>
                  <select>
                    <option value="">Select</option>
                    <option value="">Petrol</option>
                    <option value="">Diesel</option>
                    <option value="">CNG</option>
                    <option value="">EV</option>
                  </select>
                </div>
                <div className="details">
                <p>Company: </p>
                  <select>
                    <option value="">Select</option>
                    <option value="">TATA</option>
                    <option value="">Hyundai</option>
                    <option value="">Toyota</option>
                    <option value="">Mercedes</option>
                    <option value="">Audi</option>
                  </select>
                </div>
              </div>

              <div className="column">
                <div className="details">
                  <p>Model: </p> 
                  <input type="text" />
                </div>
                <div className="details">
                  <p>Plate Number: </p> 
                  <input type="text" />
                </div>
                <div className="details">
                  <p>KMS Travelled: </p> 
                  <input type="text" />
                </div>
              </div>

              <div className="column">
                <div className="details">
                  <p>Estimated Completion Date: </p>
                  <input type="date" />
                </div>
                <div className="details">
                  <p>Vehicle Status: </p>
                  <select>
                    <option value="0">Active</option>
                    <option value="1">In-active</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          <div className="mainDetails complains">
            <div className="detail-heading">
              Complains
            </div>

            <hr />

            <div className="row">
              <div className="column">
                <p>Complains: </p> 
                <textarea cols="35" rows="10"></textarea>
              </div>
              <div className="column">
                <p>Requested Service: </p> 
                <textarea cols="35" rows="10"></textarea>
              </div>
              <div className="column">
                <p>Status: </p>
                <select>
                  <option value="">Pending</option>
                  <option value="">Completed</option>
                </select>
              </div>
            </div>

          </div>

          <div className="mainDetails other">
            <div className="detail-heading">
              Other
            </div>

            <hr />
            <div className="row">
              <div className="column">
                <h5>Employee Assigned</h5>
                <div className="details">
                  <p>ID:</p>
                  <input type="text" />
                  <button>GET</button>
                </div>
                <div className="details">
                  <p>Name:</p>
                  <input type="text" />
                </div>
                <div className="details">
                  <p>Contact:</p>
                  <input type="text" />
                </div>
              </div>
              <div className="column">
                <h5>Parts Required: </h5>
                <div className="details">
                  <textarea cols="35" rows="10"></textarea>
                </div>
              </div>
              <div className="column">
                <h5>Payment: </h5>
                <div className="details">
                  <p>Amount: </p>
                  <input type="text" />
                </div>
                <div className="details">
                  <p>Status: </p>
                  <select>
                    <option value="">Select</option>
                    <option value="">Pending</option>
                    <option value="">Done</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column jobcardSaveBtn">
              <button className='saveBtn'><RiSave3Line/> Save</button>
            </div>
            <div className="column"></div>
            <div className="column">
              <p>Jobcard Status: </p>
              <select>
                <option value="">Select</option>
                <option value="">Pending</option>
                <option value="">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Jobcard;
