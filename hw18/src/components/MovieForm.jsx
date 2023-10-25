import { useState } from "react";
import Input from "./Input";
import data from "../data.json";

const initialData = {};
data.inputs.forEach(input => (initialData[input.name] = ""));

const MovieForm = ({ onSubmitMovie }) => {
  const [inputValues, setInputValues] = useState(initialData);

  const handleInputChange = e => setInputValues({ ...inputValues, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValues.title) {
      const movie = { ...inputValues, id: Date.now() };
      onSubmitMovie(movie);
    }
  };

  return (
    <form className='flex flex-col gap-5 border p-5 rounded-xl w-full' onSubmit={handleSubmit}>
      {data.inputs.map((input, index) => (
        <Input key={index} {...input} value={inputValues[input.name]} onInputChange={handleInputChange} /> // I used index as key because its safe in this case (inputs are not about to be changed or deleted)
      ))}

      <button type='submit' className='bg-green-600 text-white p-2 rounded-xl font-bold'>
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
