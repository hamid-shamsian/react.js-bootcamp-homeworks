import Backdrop from "./common/Backdrop";
import infoSVG from "../images/info2.svg";

const InfoModal = ({ onOk }) => {
  return (
    <Backdrop onClick={onOk}>
      <div className='bg-dark p-8 rounded-3xl flex flex-col items-center gap-5 text-color m-10 w-3/4'>
        <img src={infoSVG} alt='' />
        <h3 className='text-xl text-center font-bold'>Notes App</h3>
        <div className='self-stretch text-xl mb-5'>
          <p>App version: 1.0.0</p>
          <p>Tech Stack: React.js</p>
          <p>Developed by: hamid64bits</p>
        </div>
        <button className='w-32 px-6 py-2 bg-green-600 rounded-lg' onClick={onOk}>
          OK
        </button>
      </div>
    </Backdrop>
  );
};

export default InfoModal;
