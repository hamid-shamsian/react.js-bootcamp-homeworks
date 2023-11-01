import { useState } from "react";
import Input from "./Input";
import data from "../data.json";

const MovieForm = ({ editingMovie, onSubmitMovie, onCancel }) => {
  const [inputValues, setInputValues] = useState(editingMovie ?? {});

  const handleInputChange = e => setInputValues({ ...inputValues, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValues.title) {
      const movie = editingMovie ? inputValues : { ...inputValues, id: Date.now() };
      onSubmitMovie(movie);
    } else {
      e.target.title.style.backgroundColor = "#f44";
      e.target.title.focus();
    }
  };

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black z-10 bg-opacity-70 backdrop-blur-xl flex flex-col justify-center items-center p-5'>
      <h2 className='text-white font-bold text-xl mb-10'>{editingMovie ? "Edit Movie" : "Add a new Movie"}</h2>
      <form className='flex flex-col gap-5 border p-5 rounded-xl w-full sm:w-1/2' onSubmit={handleSubmit}>
        {data.inputs.map((input, index) => (
          <Input key={index} {...input} value={inputValues[input.name] ?? ""} onInputChange={handleInputChange} /> // I used index as key because its safe in this case (inputs are not about to be changed or deleted)
        ))}
        <div className='w-full flex gap-5 text-white font-bold'>
          <button className='bg-gray-600 p-2 rounded-xl flex-1' onClick={onCancel}>
            Cancel
          </button>
          <button type='submit' className='bg-green-600  p-2 rounded-xl  flex-1'>
            {editingMovie ? "Save Changes" : "Add Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
