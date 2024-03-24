const API_KEY = "ADD_WEATHER_API_KEY";
const WEATHER_API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Toronto&aqi=no&days=7&alerts=no`;

// return type here

async function getWeatherApiData() {
  const returnData = fetch(WEATHER_API_URL)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => console.error("Error: ", error));

  return returnData;
}

function getCurrentDayData(weatherApiData) {
  return {
    ...weatherApiData.current,
    ...weatherApiData.forecast.forecastday[0],
  };
}

function getForecastedData(weatherApiData) {
  return weatherApiData.forecast.forecastday.slice(1);
}

function extractDashboardData(weatherApiData) {
  return {
    location: { ...weatherApiData.location },
    currentDay: { ...getCurrentDayData(weatherApiData) },
    forecastedData: [...getForecastedData(weatherApiData)],
  };
}

async function getDashboardData() {
  // const cachedData = getCachedData().then().catch();
  console.log("we are retrieving data");
  const weatherApiData = await getWeatherApiData()
    .then((data) => data)
    .catch(() => "Error getting data from directly from the API");
  const dashboardData = extractDashboardData(weatherApiData);
  return dashboardData;
}

export { getDashboardData };
