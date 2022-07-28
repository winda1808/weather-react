import React from "react";
import './App.css';
import Weather from './Weather';


export default function App() {

    return (
<div className="App">
        <Weather defaultCity="London"/>
        <footer>
      <a className="Repository" href="https://github.com/winda1808/weather-react">
        Open Source Code by Winda Andhini
      </a>
        <a
          className="Instagram-link"
          href="https://www.instagram.com/windaandhini"
        >
          @windaandhini
        </a>
        </footer>
    </div>
  );
}