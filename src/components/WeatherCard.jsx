const WeatherCard = ({weather}) => {
  return (
    <div className="text-center  border-4 border-blue-800 ml-27 mr-27 rounded-2xl p-2.5">
      <h2 className="text-2xl font-semibold">{weather.city}</h2>

      <p className="text-6xl font-bold text-blue-500 my-4">{weather.temperature}</p>

      <div className="flex justify-around text-gray-600">
        <div>
          <p className="text-2xl">💧</p>
          <p>Humidity</p>
          <strong>{weather.humidity}%</strong>
        </div>

        <div>
          <p className="text-2xl">💨</p>
          <p>Wind</p>
          <strong>{weather.wind} km/h</strong>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
