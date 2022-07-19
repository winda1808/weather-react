import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
       <form className="Search">
          <div className="form-group has-feedback">
            <div className="input-group">
              <input
                type="text"
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
       </div>
      </header>
      <h2 className="City-name">Jakarta</h2>
      <h3 className="Date">Last Updated : Tue 13.13</h3>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        className="Img"
        width="180px"
        alt="weather-icon"
      />
      <div className="Main">
        25 <span className="Units">°C|°F</span>
      </div>
      <div className="Description">Cloudy</div>
      <div className="Other">
        <span className="Humidity">80%</span>
        <span className="Wind">5 km/h</span>
      </div>
      <div className="Forecast-daily"></div>
      <a className="Repository" href="https://github.com/winda1808/weather-app">
        Open Source Code by Winda Andhini
      </a>
        <a
          className="Instagram-link"
          href="https://www.instagram.com/windaandhini"
        >
          @windaandhini
        </a>
    </div>
  );
}

export default App;
