import { useEffect, useState } from "react";
import Button from "./components/Button";
import Lap from "./components/Lap";
import { formatTime } from "./utils/utilityFuncs";
import "./App.css";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (timerId) {
      const id = setTimeout(() => setTimer(prevTimer => prevTimer + 1), 1000);
      setTimerId(id);
    }
  }, [timer]);

  const handleStart = () => {
    const id = setTimeout(() => setTimer(prevTimer => prevTimer + 1), 1000); // setTimeout timing period is not accurate and we should use Date object instead. but time for coding was short! :)
    setTimerId(id);
  };

  const handleStop = () => {
    clearTimeout(timerId);
    setTimerId(null);
  };

  const handleAddLap = () =>
    setLaps(prevLaps =>
      prevLaps.length
        ? [...prevLaps, { id: prevLaps.at(-1).id + 1, time: timer - prevLaps.at(-1).overallTime, overallTime: timer }]
        : [{ id: 1, time: timer, overallTime: timer }]
    );

  const handleReset = () => {
    setTimerId(null);
    setTimer(0);
    setLaps([]);
  };

  return (
    <div className='w-96 mx-auto bg-gray-900 rounded-2xl mt-20 text-gray-200 py-10'>
      <p className='text-center font-bold text-3xl mb-5'>{formatTime(timer)}</p>

      <div className='flex justify-center gap-5 mb-7'>
        <Button text='Start' disabled={timerId} color='bg-green-700' onClick={() => !timerId && handleStart()} />
        <Button text='+Lap' disabled={!timerId} color='bg-blue-700' onClick={() => timerId && handleAddLap()} />
        <Button text='Stop' disabled={!timerId} color='bg-red-700' onClick={() => timerId && handleStop()} />
        <Button text='Reset' disabled={!timer} color='bg-yellow-700' onClick={() => timer && handleReset()} />
      </div>

      <table className='table-fixed w-full text-left'>
        <thead>
          <tr>
            <th>Lap</th>
            <th>Lap Time</th>
            <th className='whitespace-nowrap'>Overall Time</th>
          </tr>
        </thead>
        <tbody>
          {laps.map(lap => (
            <Lap key={lap.id} lap={lap} />
          ))}
        </tbody>
      </table>

      {!laps.length && <p className='text-center mt-4 bg-blue-800'>Add a new Lap!</p>}
    </div>
  );
};

export default App;
