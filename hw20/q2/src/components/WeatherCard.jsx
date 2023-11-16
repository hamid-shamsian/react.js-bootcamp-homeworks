const WeatherCard = ({ weather, day, temp, active }) => {
  return (
    <div className={`flex flex-col gap-2 items-center rounded-md flex-1 p-2 ${active ? "bg-white text-black" : "text-white"}`}>
      <img src={`./images/${weather}.png`} alt='' width={40} />
      <p>{day}</p>
      <p className='font-bold'>{temp} °C</p>
    </div>
  );
};

export default WeatherCard;
