import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

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
          autoFocus="on"
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

  function showTemperature(response) {
    setTemperature({
        ready: true,
        temperature: response.data.main.temp,
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.dt * 1000),
        icon: response.data.weather[0].icon
      });
  }


function search() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae7a846b3048f734526a71e1a47e2b4b&units=metric`;
    axios.get(url).then(showTemperature);

}

function handleSubmit(event) {
  event.preventDefault ();
  search ();
}

  if (temperature.ready) {
    return (
        <div className="Weather">
       {form}
       <h2 className="City-name text-uppercase">{temperature.city}</h2>
       <h3 className="Date">
       <FormattedDate date={temperature.date} />
       </h3>
       <div className="Img">
       <WeatherIcon code={temperature.icon} alt={temperature.description}/>
       </div>
        <WeatherUnits celsius={temperature.temperature} />
       <div className="Description">{temperature.description}</div>
       <div className="Other">
         <span className="Humidity">Humidity: {temperature.humidity}%</span>
         {" "} 
         <span className="Wind"> Wind: {Math.round(temperature.wind)}km/h</span>
       </div>
       </div>
    );
  } else {
    search ();
    return form;
  }
}
