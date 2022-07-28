import React, { useState, useEffect } from "react";
import './Forecast.css';
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function Forecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect(() => {
       setLoaded(false);
    }, [props.coord]);

    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
        
    if (loaded) {
    return (
            <div className = "Forecast">
                <div className="container">
                    <div className="row">
                        {forecast.map(function (dailyForecast, index) {
                            if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                <ForecastDay data={dailyForecast} />
                                 </div>
                            );
                            } else {
                                return null;
                            }
                        })}  
                    </div>
                </div>
            </div>
        );
    } else {

        let lat = props.coord.lat;
        let lon = props.coord.lon;
        let apiKey = "ae7a846b3048f734526a71e1a47e2b4b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    
    return null; 
    } 
}