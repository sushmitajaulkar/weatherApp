import React from "react";
import {WiDayCloudyGusts}  from "react-icons/wi";
// import Sun from "./img/sun2.png"
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fw-bolder mt-1 ">
        <div className="container con">
          <p className="navbar-brand">
            <WiDayCloudyGusts size={40}/> Weather Report
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="rigth">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">
                  Contact
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">
                  About
                </p>
              </li>
              
            </ul>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
