import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Weather from "./components/Weather";
import { debounce } from "./utils/utilityFuncs";
import { api_key, geo_url, wth_url } from "./config";

const App = () => {
  const [cityQuery, setCityQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // I changed 👇 useCallback to useMemo because of a weird warning about useCallback saying: "React Hook useCallback received a function whose dependencies are unknown"! and after searching the issue in stackoverflow, I realized that useCallback and useMemo hooks expect inline functions as the first parameter, so i changed useCallback to useMemo to be able to return that debounced function in the body of an inline arrow function passed to useMemo! :)
  const fetchWeather = useMemo(
    () =>
      debounce(async city => {
        if (!city) return setWeather(null);
        try {
          setError(false);
          const { data: cityCoord } = await axios.get(`${geo_url}?q=${city}&limit=1${api_key}`);

          if (cityCoord[0]) {
            const { lat, lon } = cityCoord[0];
            const weather = await axios.get(`${wth_url}?lat=${lat}&lon=${lon}${api_key}`);
            setWeather(weather.data);
          } else {
            setWeather(null);
          }
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }, 500),
    []
  );

  useEffect(() => {
    setLoading(true);
    setWeather(null);
    fetchWeather(cityQuery);
  }, [cityQuery, fetchWeather]);

  const onInputChange = ({ target }) => setCityQuery(target.value);

  return (
    <div className='bg-gray-700 min-h-screen pt-10'>
      <Input value={cityQuery} onChange={onInputChange} />

      {cityQuery && (
        <main className='bg-gray-900 w-[700px] mx-auto rounded-xl text-white p-10 mt-16'>
          {weather && <Weather weather={weather} />}

          {cityQuery && !weather && !loading && <p className='text-center'>City Not Found!</p>}
          {cityQuery && !weather && loading && <p className='text-center'>Searching!</p>}

          {error && <p className='text-center'>Something went wrong!</p>}
        </main>
      )}
    </div>
  );
};

export default App;
