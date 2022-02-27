import React from "react";

export default function Navtabs() {
  return (
    <div className="navtab">
      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Today
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Hourly
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Weekend
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Monthly
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Radar
          </a>
        </li>
      </ul>
    </div>
  );
}
