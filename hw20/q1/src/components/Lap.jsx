import { formatTime } from "../utils/utilityFuncs";

const Lap = ({ lap }) => {
  return (
    <tr>
      <td>{lap.id}</td>
      <td>{formatTime(lap.time)}</td>
      <td>{formatTime(lap.overallTime)}</td>
    </tr>
  );
};

export default Lap;
