import { useState } from "react";
import MovieForm from "./components/MovieForm";
import Movie from "./components/Movie";
import data from "./data.json";

const App = () => {
  const [movies, setMovies] = useState(data.movies);

  const handleSubmitMovie = movie => setMovies([...movies, movie]);

  const handleDelete = movie => setMovies(movies.filter(m => m !== movie));

  return (
    <div className='container mx-auto flex flex-col items-center p-6 pb-10 max-w-xl'>
      <MovieForm onSubmitMovie={handleSubmitMovie} />

      <div className='flex flex-col gap-10 mt-10'>
        {movies.map(m => (
          <Movie key={m.id} movie={m} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;
