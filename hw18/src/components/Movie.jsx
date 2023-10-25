const Movie = ({ movie, onDelete, onEdit }) => {
  const { title, genre, desc, year, rating } = movie;

  return (
    <div className='relative p-6 pb-8 flex flex-col items-center gap-5 bg-gray-300 rounded-xl shadow-lg xs:flex-row xs:items-start'>
      <img className='w-full xs:w-32 h-fit rounded-lg' src='./images/movie.jpg' alt='movie cover image' />

      <div>
        <h2 className='font-bold'>{title}</h2>
        <table className='text-left mt-5'>
          <tbody>
            {desc && (
              <tr>
                <th className='font-normal text-gray-600 align-top'>Description</th>
                <td>{desc}</td>
              </tr>
            )}
            {year && (
              <tr>
                <th className='font-normal text-gray-600 whitespace-nowrap pr-5'>Release Year</th>
                <td>{year}</td>
              </tr>
            )}
            {rating && (
              <tr>
                <th className='font-normal text-gray-600'>Rating</th>
                <td>{rating}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {genre && <span className='absolute right-20 -bottom-3 bg-yellow-300 py-1 px-3 rounded-full'>{genre}</span>}
      <button
        className='p-3 rounded-full bg-red-600 w-7 h-7 flex justify-center items-center text-white absolute top-3 -right-3'
        onClick={() => onDelete(movie)}
      >
        X
      </button>
      <button
        className='p-3 rounded-full bg-blue-500 w-7 h-7 flex justify-center items-center text-white absolute top-12 -right-3'
        onClick={() => onEdit(movie)}
      >
        E
      </button>
    </div>
  );
};

export default Movie;
