import "./Counter.css";
import { useState } from "react";

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState({ value: initialValue, color: "white" });

  return (
    <div className={`counter counter--${counter.color}`}>
      <button className='counter__plus' onClick={() => setCounter({ value: counter.value + 1, color: "green" })}>
        <i className='fa fa-plus'></i>
      </button>

      <span className='counter__value'>{counter.value}</span>

      <button className='counter__minus' onClick={() => counter.value > 0 && setCounter({ value: counter.value - 1, color: "red" })}>
        <i className='fa fa-minus'></i>
      </button>
    </div>
  );
};

export default Counter;
