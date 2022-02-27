import React, { useState, useEffect } from "react";
import Img4 from "./img/img4.jpg";
import Img2 from "./img/img2.jpg";
import Img3 from "./img/img3.jpg";
import Max from "./img/maxtemp.png";
import Min from "./img/mintemp.png";
import Pressure from "./img/pressure.png";
import Humidity from "./img/humidity.png";
export default function Slider() {
  const key = "320e8dcea35cad3530796f1a233d54c7";

  const [all_data, setAllData] = useState("");

  const [city_name, setCityName] = useState("Nagpur");

  useEffect(() => {
    const getTemp = async () => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city_name +
          "&units=metric&appid=" +
          key
      )
        .then((res) => res.json())
        .then((abc) => {
          setAllData(abc.main);
        });
    };
    getTemp();
  }, [city_name]);
  return (
    <div className="container1">
      <div className="row">
        <div className="col-md-6">
          <div className="d-inline ">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner  w-100" style={{ height: "400px"},{borderRadius:"3px"}}>
                <div class="carousel-item active">
                  <img
                    src={Img4}
                    class="d-block w-100 my-slide-img"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={Img2}
                    class="d-block w-100 my-slide-img"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={Img3}
                    class="d-block w-100 my-slide-img"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon right"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="tab1">
            <div className="mb-3 inp">
              <input
                type="text"
                class="form-control"
                value={city_name}
                onChange={(e) => {
                  setCityName(e.target.value);
                }}
                placeholder="Enter city"
              />
            </div>

            <div className="tab">
              <p className="thead fw-bolder"> Today's Weather </p>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <img src={Max} />
                    </td>
                    <td>Max-Temp</td>
                    <td>
                      {typeof all_data == "undefined"
                        ? "Loading"
                        : all_data.temp_max}°
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Min} />
                    </td>
                    <td>Min-Temp</td>
                    <td>
                      {typeof all_data == "undefined"
                        ? "Loading"
                        : all_data.temp_min}°
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Pressure} />
                    </td>
                    <td>Pressure</td>
                    <td>
                      {typeof all_data == "undefined"
                        ? "Loading"
                        : all_data.pressure}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Humidity} />
                    </td>
                    <td>Humidity</td>
                    <td>
                      {typeof all_data == "undefined"
                        ? "Loading"
                        : all_data.humidity}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
