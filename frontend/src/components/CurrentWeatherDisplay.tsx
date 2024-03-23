import WeatherInfoBar from "./WeatherInfoBar.tsx";

function CurrentWeatherDisplay({ currentWeatherData }) {
  const getWeatherDataInfo = {
    Temperature: `${currentWeatherData.temp_c}\u00B0C`,
    "Feels Like": `${currentWeatherData.feelslike_c}\u00B0C`,
    Wind: `${currentWeatherData.wind_kph}kph`,
    Precip: `${currentWeatherData.precip_mm}mm`,
  };
  return (
    <>
      <WeatherInfoBar contents={getWeatherDataInfo} />
    </>
  );
}

export default CurrentWeatherDisplay;
