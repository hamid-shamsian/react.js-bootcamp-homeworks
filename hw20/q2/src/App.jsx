import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import { debounce } from "./utils/utilityFuncs";

const App = () => {
  const [cityQuery, setCityQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = useCallback(
    debounce(async city => {
      try {
        const { data: cityCoord } = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=beadc217714fa0edd12c5a362713d399`
        );

        if (cityCoord[0]) {
          const { lat, lon } = cityCoord[0];
          const weather = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1bac422f64675811e19721aeb41fe86a`
          );
          setWeather(weather.data);
        } else {
          setWeather(null);
        }
      } catch (error) {
        setError(true);
      }
    }, 700),
    []
  );

  useEffect(() => {
    if (cityQuery.length > 2) fetchWeather(cityQuery);
    else {
      setWeather(null);
    }
  }, [cityQuery, fetchWeather]);

  const onInputChange = ({ target }) => setCityQuery(target.value);

  return (
    <div className='bg-gray-700 h-screen pt-10'>
      <Input value={cityQuery} onChange={onInputChange} />

      <main className='bg-gray-900 w-[600px] mx-auto rounded-xl text-white p-7'>
        {weather && (
          <div>
            <p className='text-center font-bold mb-5'>{weather.name}</p>
            <div className='flex justify-between'>
              <p>Pressure</p>
              <p>{weather.main.pressure}</p>
            </div>
            <div className='flex justify-between'>
              <p>Humidity</p>
              <p>{weather.main.humidity}</p>
            </div>
            <div className='flex justify-between'>
              <p>Wind Speed</p>
              <p>{weather.wind.speed}</p>
            </div>
          </div>
        )}

        {cityQuery && !weather && <p className='text-center'>City Not Found!</p>}

        {!cityQuery && <p className='text-center'>Search for a City...</p>}

        {error && <p className='text-center'>Something went wrong!</p>}
      </main>
    </div>
  );
};

export default App;
