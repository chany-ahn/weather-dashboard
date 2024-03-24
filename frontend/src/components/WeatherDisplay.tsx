import WeatherInfoBar from "./WeatherInfoBar.tsx";

// We want to eventually set the weather data parameters into the function
function WeatherDisplay({ weatherData }) {
  const dayWeatherData = weatherData.day;
  const contentsToDisplay = {
    "Max Temp": `${dayWeatherData.maxtemp_c}\u00B0C`,
    "Min Temp": `${dayWeatherData.mintemp_c}\u00B0C`,
    "Max Wind": `${dayWeatherData.maxwind_kph}kph`,
    "Total Precip": `${dayWeatherData.totalprecip_mm}mm`,
  };
  return (
    <>
      <WeatherInfoBar contents={contentsToDisplay} />
    </>
  );
}
export default WeatherDisplay;
