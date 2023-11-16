import { useState } from "react";
import "./App.css";

const App = () => {
  const [laps, setLaps] = useState([]);

  return (
    <div className='w-96 mx-auto bg-gray-900 h-96 rounded-2xl mt-20 text-gray-200 py-10'>
      <p className='text-center font-bold text-3xl mb-5'>43:43:00</p>

      <div className='flex justify-center gap-5 mb-7'>
        <button className='border-0 w-14 h-14 rounded-full flex justify-center items-center bg-green-700'>Start</button>
        <button className='border-0 w-14 h-14 rounded-full flex justify-center items-center bg-blue-700'>+Lap</button>
        <button className='border-0 w-14 h-14 rounded-full flex justify-center items-center bg-red-700'>Stop</button>
      </div>

      <table className='table-fixed w-full text-left'>
        <thead>
          <tr>
            <th>Lap</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
