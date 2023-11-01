const Button = ({ icon, onClick }) => {
  return (
    <button className='w-14 h-14 rounded-2xl bg-[#3b3b3b] flex justify-center items-center' onClick={onClick}>
      <img src={icon} alt='button' width={35} />
    </button>
  );
};

export default Button;
