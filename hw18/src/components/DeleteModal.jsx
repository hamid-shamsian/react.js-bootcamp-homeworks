import Backdrop from "./common/Backdrop";
import infoSVG from "../images/info2.svg";

const DeleteModal = ({ onCancel, onDelete }) => {
  return (
    <Backdrop>
      <div className='bg-dark p-8 rounded-3xl flex flex-col items-center gap-5 text-color m-10'>
        <img src={infoSVG} alt='' />
        <p className='text-2xl text-center'>Are you sure you want to Delete this Note?</p>
        <div className='text-xl flex justify-between w-full'>
          <button className='w-32 px-6 py-2 bg-red-600 rounded-lg' onClick={onDelete}>
            Delete
          </button>
          <button className='w-32 px-6 py-2 bg-green-600 rounded-lg' onClick={onCancel}>
            Keep
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default DeleteModal;
