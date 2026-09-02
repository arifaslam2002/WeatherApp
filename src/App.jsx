import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  return (
    <div>
      <h1 className="text-center font-black text-3xl bg-amber-300 rounded-4xl mt-1.5">Weather App 🌤️</h1>
       <SearchBar />
       <WeatherCard />
    </div>
  );
};

export default App;
