const Weather = ({ weather }) => {
  return (
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
  );
};

export default Weather;
