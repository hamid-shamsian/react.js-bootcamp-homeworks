import WeatherCard from "./WeatherCard";
import locationIcon from "../images/location.png";

const Weather = ({ weather }) => {
  const now = new Date();
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now);
  const date = now.toDateString().slice(4);

  return (
    <div className='flex gap-20'>
      <div className='flex-1 cover rounded-2xl p-5 flex flex-col justify-between'>
        <div>
          <p className='font-bold mb-1'>{weekday}</p>
          <p className='mb-2'>{date}</p>
          <p className='font-semibold mb-5 flex items-center gap-1'>
            <img src={locationIcon} alt='' width={17} className='h-fit' />
            {weather.name}, {weather.sys.country}
          </p>
        </div>
        <div>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' className='-translate-x-5' />
          <p className='font-bold text-xl mb-2'>{weather.main.temp.toFixed() - 273} °C</p>
          <p>{weather.weather[0].main}</p>
        </div>
      </div>

      <div className='flex-1 flex flex-col gap-2'>
        <div className='flex justify-between'>
          <p className='font-bold'>PRESSURE</p>
          <p>{weather.main.pressure} hPa</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold'>HUMIDITY</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold'>WIND</p>
          <p>{weather.wind.speed} km/h</p>
        </div>

        <div className='mt-14 bg-gray-800 rounded-md flex'>
          <WeatherCard weather='sunny' temp={30} day='Thu' active={true} />
          <WeatherCard weather='semi-clouds' temp={25} day='Fri' />
          <WeatherCard weather='rainy' temp={27} day='Sat' />
          <WeatherCard weather='semi-clouds' temp={31} day='Sun' />
        </div>
      </div>
    </div>
  );
};

export default Weather;
