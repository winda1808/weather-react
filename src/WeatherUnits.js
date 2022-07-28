import React from "react";
import './Weather.css';


export default function WeatherUnits(props) {
   
    return (
        <div className="Main">
         {Math.round(props.celsius)}  
        <span className="Units">
           <span className="Active">°C</span>
          
        </span>
        </div>
    );
}


//from 6
// const [unit, setUnit] = useState ("celsius");
//function showFahrenheit (event) {
   // event.preventDefault ();
    //setUnit("fahrenheit");}

//function showCelsius (event) {
    //event.preventDefault ();
   // setUnit("celsius");}
        
// from 17
//if (unit === "celsius")
// from 24
//<span className="Passive">
// <a href="/" onClick={showFahrenheit}>|°F</a></span>
// from 27
// else {
//let fahrenheit = (props.celsius * 9) / 5 + 32;
    //return (
        //<div className="Main">
        // {Math.round(fahrenheit)}  
       // <span className="Units">
         //  <span className="Passive">
         //  <a href="/" onClick={showCelsius}>°C</a>
        //    </span>
        //   <span className="Active">|°F</span>
      //  </span>
     //   </div> );}