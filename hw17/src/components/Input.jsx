const Input = ({ onInputChange, ...restProps }) => {
  return <input className='border outline-none p-2 rounded-xl shadow-md' onChange={onInputChange} {...restProps} />;
};

export default Input;
