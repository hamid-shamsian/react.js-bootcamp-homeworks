const Input = props => {
  return (
    <input
      className='outline-none border bg-transparent border-gray-500 p-3 rounded-xl w-[600px] mx-auto block mb-10 text-white'
      type='search'
      placeholder='Search City...'
      {...props}
    />
  );
};

export default Input;
