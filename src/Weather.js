import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {

    const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState(null);
    const [shown, setShown] = useState(false);
    const form =
    <form onSubmit={handleSubmit}>
    <div className="form-group has-feedback">
      <div className="input-group">
        <input
          type="search"
          onChange={updateCity}
          className="form-control"
          placeholder="Search City"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn Search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </span>
      </div>
    </div>
    </form>

    function updateCity(event) {
     setCity(event.target.value);
      }

  function handleSubmit(response) {
    setTemperature({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed
      });
    setShown(true);
  }

  if (shown) {
    return (
        <div className="Weather">
        <div>
       {form}
       </div>
       <h2 className="City-name">{city}</h2>
       <h3 className="Date">Last Updated : Tue 13.13</h3>
       <img
         src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
         className="Img"
         width="180px"
         alt="weather-icon"
       />
       <div className="Main">
         {temperature} 
         <span className="Units">
           <span className = "Active">°C</span>
           <span className = "Passive">|°F</span>
           </span>
       </div>
       <div className="Description">{temperature.description}</div>
       <div className="Other">
         <span className="Humidity">{temperature.humidity}</span>
         <span className="Wind">{temperature.wind} km/h</span>
       </div>
       </div>
    );
  } else {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae7a846b3048f734526a71e1a47e2b4b&units=metric`;
    axios.get(url).then(handleSubmit);

    return form;
  }
}
