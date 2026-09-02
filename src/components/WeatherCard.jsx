const WeatherCard = () => {
  return (
    <div className="text-center  border-4 border-blue-800 ml-27 mr-27 rounded-2xl p-2.5">
      <h2 className="text-2xl font-semibold">Thiruvananthapuram</h2>

      <p className="text-6xl font-bold text-blue-500 my-4">28°C</p>

      <div className="flex justify-around text-gray-600">
        <div>
          <p className="text-2xl">💧</p>
          <p>Humidity</p>
          <strong>75%</strong>
        </div>

        <div>
          <p className="text-2xl">💨</p>
          <p>Wind</p>
          <strong>12 km/h</strong>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
