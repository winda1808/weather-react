import React from "react";
import WeatherIcon from "./WeatherIcon";
import './Forecast.css';


export default function ForecastDay (props){

    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }

    return (
<div>
    <div className = "Forecast-day">{day()}</div>
    <WeatherIcon code={props.data.weather[0].icon} size={40} color="whitesmoke"/>
    <div className="Forecast-Temperature">
    <span className="Temp-Max">{maxTemp()}</span>
    <span className="Temp-Min">{minTemp()}</span>
        </div>
        </div>
    );
}