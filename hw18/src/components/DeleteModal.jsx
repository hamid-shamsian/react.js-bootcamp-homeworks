const DeleteModal = ({ deletingMovie, onCancel, onDoDelete }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black z-10 bg-opacity-70 backdrop-blur-xl flex flex-col justify-center items-center p-5'>
      <div className='flex flex-col gap-5 border p-5 rounded-xl w-full sm:w-1/2'>
        <h2 className='text-white font-bold text-xl mb-10'>
          Are you sure you want to delete movie <span className='whitespace-nowrap'>"{deletingMovie.title}" ?</span>
        </h2>
        <div className='w-full flex gap-5 text-white font-bold'>
          <button className='bg-gray-600 p-2 rounded-xl flex-1' onClick={onCancel}>
            Cancel
          </button>
          <button className='bg-red-600  p-2 rounded-xl  flex-1' onClick={onDoDelete}>
            Delete Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
