import WeatherInfoBar from "./WeatherInfoBar.tsx";

const weatherDataDay = {
  date: "2024-01-12",
  temp: -12,
  wind: 2,
  precip: 12,
};

function WeatherDisplay() {
  return (
    <>
      <div className="card" style={{ width: 10 + "rem" }}>
        <div className="card-body">
          <h4 className="card-title">{weatherDataDay.date}</h4>
          <img
            src="weather_icons/weather/64x64/day/113.png"
            className="card-img-top"
            alt="Sunny"
          />
          <WeatherInfoBar
            temp={weatherDataDay.temp}
            precip={weatherDataDay.precip}
            wind={weatherDataDay.wind}
          />
        </div>
      </div>
    </>
  );
}

export default WeatherDisplay;
