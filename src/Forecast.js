import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import './Forecast.css';
import axios from "axios";


export default function Forecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
        
    if (loaded) {
    return (
            <div className = "Forecast">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <div className = "Forecast-day">{forecast[0].dt}</div>
                        <WeatherIcon code={forecast[0].weather[0].icon} size={50} color="black" />
                        <div className="Forecast-Temperature">
                        <span className="Temp-Max">{forecast[0].temp.max}°C</span>
                        <span className="Temp-Min">{forecast[0].temp.min}°C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {

        let lat = props.coord.lat;
        let lon = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=ae7a846b3048f734526a71e1a47e2b4b&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    
    return "Loading Forecast"; 
    } 
}