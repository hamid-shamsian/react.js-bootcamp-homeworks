const Movie = ({ movie, onDelete, onEdit, onWatch }) => {
  const { title, genre, desc, year, rating, watched } = movie;

  return (
    <div className='relative p-6 pb-8 flex flex-col items-center gap-5 bg-gray-300 rounded-xl shadow-lg xs:flex-row xs:items-start'>
      <img className='w-full xs:w-32 h-fit rounded-lg' src='./images/movie.jpg' alt='movie cover' />

      <div>
        <h2 className='font-bold flex justify-between items-center'>
          <span className='py-2'>{title}</span>
          {watched && (
            <span className='mr-5 font-normal bg-green-500 px-2 py-1 rounded-full text-white whitespace-nowrap'>
              Watched <i className='fa fa-circle-check'></i>
            </span>
          )}
        </h2>
        <table className='text-left mt-5'>
          <tbody>
            {desc && (
              <tr>
                <th className='font-normal text-gray-600 pr-5 align-top'>Description</th>
                <td>{desc}</td>
              </tr>
            )}
            {year && (
              <tr>
                <th className='font-normal text-gray-600 pr-5 whitespace-nowrap'>Release Year</th>
                <td>{year}</td>
              </tr>
            )}
            {rating && (
              <tr>
                <th className='font-normal text-gray-600 pr-5'>Rating</th>
                <td>{rating}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {genre && <span className='absolute right-20 -bottom-3 bg-yellow-300 py-1 px-3 rounded-full'>{genre}</span>}
      <button
        className='rounded-full bg-red-600 w-7 h-7 flex justify-center items-center text-white absolute top-3 -right-3'
        onClick={() => onDelete(movie)}
      >
        <i className='fa fa-trash fa-xs'></i>
      </button>
      <button
        className='rounded-full bg-blue-500 w-7 h-7 flex justify-center items-center text-white absolute top-12 -right-3'
        onClick={() => onEdit(movie)}
      >
        <i className='fa fa-pen fa-xs'></i>
      </button>
      <button
        className='rounded-full bg-green-500 w-7 h-7 flex justify-center items-center text-white absolute top-[84px] -right-3'
        onClick={() => onWatch(movie)}
      >
        <i className='fa fa-check'></i>
      </button>
    </div>
  );
};

export default Movie;
