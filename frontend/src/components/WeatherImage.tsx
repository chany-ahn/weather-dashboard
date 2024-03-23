function WeatherImage({ weatherCondition }) {
  return <img src={weatherCondition.icon} alt={weatherCondition.text} />;
}

export default WeatherImage;
