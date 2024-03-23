import "./styles/WeatherInfoBar.css";

function WeatherInfoBar({ contents }) {
  return (
    <>
      <ul>
        {Object.keys(contents).map((key) => {
          return (
            <li className="item">
              <b>{key}</b>: {contents[key]}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default WeatherInfoBar;
