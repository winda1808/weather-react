import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import FormattedDate from "./FormattedDate";

export default function Weather(props) {

    const [temperature, setTemperature] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
  
    let form =
    <form onSubmit={handleSubmit}>
    <div className=" Search form-group has-feedback">
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
        event.preventDefault ();
     setCity(event.target.value);
      }

  function handleSubmit(response) {
    setTemperature({
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.dt * 1000),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
   
  }

  if (temperature.ready) {
    return (
        <div className="Weather">
       {form}
       <h2 className="City-name">{city}</h2>
       <h3 className="Date">
       <FormattedDate date={temperature.date} />
       </h3>
       <img
         src={temperature.icon}
         className="Img"
         width="180px"
         alt={temperature.description}
       />
       <div className="Main">
         {Math.round(temperature.temperature)} 
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

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=ae7a846b3048f734526a71e1a47e2b4b&units=metric`;
    axios.get(url).then(handleSubmit);

    return form;
  }
}
