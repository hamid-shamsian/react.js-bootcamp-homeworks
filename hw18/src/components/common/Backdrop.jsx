import { createPortal } from "react-dom";

const Backdrop = ({ children, onClick }) => {
  const jsx = (
    <div
      className='fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-white bg-opacity-10 backdrop-blur-sm z-10'
      onClick={onClick}
    >
      {children}
    </div>
  );

  return createPortal(jsx, document.getElementById("modal"));
};

export default Backdrop;
