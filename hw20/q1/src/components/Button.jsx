const Button = ({ color, text, disabled, onClick }) => {
  return (
    <button
      className={`border-0 w-14 h-14 font-bold rounded-full flex justify-center items-center ${color} ${
        disabled ? "text-gray-700 cursor-not-allowed" : "text-black"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
