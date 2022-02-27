import React from "react";
import Sun from "./img/sun2.png";
import Hail from "./img/hail.png";
export default function main() {
  return (
    <div >
      <div class="container card text-center">
        <div class="card-header bg-light">
          <img src={Hail} />
          <img src={Sun} />
          <img src={Hail} />
        </div>
        <div class="card-body text-light">
          <h5 class="card-title text-dark">Welcome To Our App</h5>
          <p class="card-text fw-bold">
            Thank you for giving your valuable time to our weather app. 
            It was so nice to meet with you.<br></br> Hope our meeting would bring a positive result.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
