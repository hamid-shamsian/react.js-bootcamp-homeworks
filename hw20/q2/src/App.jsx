import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import { debounce } from "./utils/utilityFuncs";
import { api_key, geo_url, wth_url } from "./config";
import Weather from "./components/Weather";

const App = () => {
  const [cityQuery, setCityQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = useCallback(
    debounce(async city => {
      try {
        const { data: cityCoord } = await axios.get(`${geo_url}?q=${city}&limit=1${api_key}`);
        if (cityCoord[0]) {
          const { lat, lon } = cityCoord[0];
          const weather = await axios.get(`${wth_url}?lat=${lat}&lon=${lon}${api_key}`);
          setWeather(weather.data);
          setError(false);
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
    if (cityQuery.length) fetchWeather(cityQuery);
    else setWeather(null);
  }, [cityQuery, fetchWeather]);

  const onInputChange = ({ target }) => setCityQuery(target.value);

  return (
    <div className='bg-gray-700 h-screen pt-10'>
      <Input value={cityQuery} onChange={onInputChange} />

      <main className='bg-gray-900 w-[600px] mx-auto rounded-xl text-white p-7'>
        {weather && <Weather weather={weather} />}

        {cityQuery && !weather && <p className='text-center'>City Not Found!</p>}

        {!cityQuery && <p className='text-center'>Search for a City...</p>}

        {error && <p className='text-center'>Something went wrong!</p>}
      </main>
    </div>
  );
};

export default App;
