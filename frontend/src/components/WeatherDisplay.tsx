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
      <div></div>
      <WeatherInfoBar />
    </>
  );
}

export default WeatherDisplay;
