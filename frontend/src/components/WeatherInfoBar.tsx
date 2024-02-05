function WeatherInfoBar({ temp, precip, wind }) {
  return (
    <>
      <div>
        <h2>Temperature</h2>
        {temp}
      </div>
      <div>
        <h2>Precipitation</h2>
        {precip}
      </div>

      <div>
        <h2>Wind</h2>
        {wind}
      </div>
    </>
  );
}

export default WeatherInfoBar;
