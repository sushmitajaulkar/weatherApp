import React from "react";
import {WiDayCloudyGusts}  from "react-icons/wi";
import Facebook from "./img/facebook.png";
import Twitter from "./img/twitter.png";
import Instagram from "./img/instagram.png";
import Gmail from "./img/gmail.png";
export default function Footer() {
  return (
    <footer className="pb-3 pt-3 mt-3 footbg text-light">
      <div className="container">
        <div className="row" style={{borderBottom:"2px solid white"}}>
          <div className="col-md-6">
              <h4 className="h4"><WiDayCloudyGusts size={40}/>Weather Report</h4>
            <p>
              Connect with us :
              <img src={Facebook}/>
              <img src={Twitter}/>
              <img src={Instagram}/>
              <img src={Gmail}/>
              <p>Email: sushmitajaulkar@gmail.com</p>
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="h4">Important Links</h4>  
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-bolder text-dark" >github.com</li>
              <li className="list-group-item fw-bolder text-dark">google.com</li>
              <li className="list-group-item fw-bolder text-dark">www.npmjs.com</li>
              
            </ul>
          </div>
          <div className="col-md-3">
          <h4 className="h4">Other Links</h4>  
            <ul className="list-group list-group-flush borderless">
              <li className="list-group-item fw-bolder text-dark">openweathermap.org</li>
              <li className="list-group-item fw-bolder text-dark">Weather.com</li>
              <li className="list-group-item fw-bolder text-dark">getBootstrap.com</li>
              <li className="list-group-item fw-bolder text-dark">icons8.com</li>
              <li className="list-group-item fw-bolder text-dark">RTC</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-3">2021@all rights are reserved</p>
      </div>
    </footer>
  );
}
