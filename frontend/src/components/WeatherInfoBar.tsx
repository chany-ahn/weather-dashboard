import "./WeatherInfoBar.css";

function WeatherInfoBar({ temp, precip, wind }) {
  return (
    <>
      <div className="item">
        <h5>Temperature</h5>
        <p>{temp}&deg;C</p>
      </div>
      <div className="item">
        <h5>Precipitation</h5>
        <p>{precip}mm</p>
      </div>
      <div className="item">
        <h5>Wind</h5>
        <p>{wind}kph</p>
      </div>
    </>
  );
}

export default WeatherInfoBar;
