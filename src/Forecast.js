import React from "react";
import WeatherIcon from "./WeatherIcon";
import './Forecast.css';
import axios from "axios";




export default function Forecast () {
    function handleResponse (response) {

    }
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=ae7a846b3048f734526a71e1a47e2b4b&units=metric`
    axios.get(url).then(handleResponse);

    return (
        <div className = "Forecast">
            <div className="Container">
                <div className="row">
                    <div className="col">
                    <div className = "Forecast-day">Thu</div>
                    <WeatherIcon code="01n" size={50} color="black" />
                    <div className="Forecast-Temperature">
                    <span className="Temp-Max">19°</span>
                    <span className="Temp-Min">10°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}