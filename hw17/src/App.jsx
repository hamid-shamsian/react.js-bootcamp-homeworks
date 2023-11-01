import { useState } from "react";
import MovieForm from "./components/MovieForm";
import Movie from "./components/Movie";
import DeleteModal from "./components/DeleteModal";
import data from "./data.json";

const App = () => {
  const [movies, setMovies] = useState(data.movies);
  const [movieUnderAction, setMovieUnderAction] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSubmitMovie = movie => {
    if (movieUnderAction) {
      setMovies(prevMovies => prevMovies.map(m => (m === movieUnderAction ? movie : m)));
      setMovieUnderAction(null);
    } else {
      setMovies(prevMovies => [...prevMovies, movie]);
    }
    setShowForm(false);
  };

  const handleDelete = movie => {
    setMovieUnderAction(movie);
    setShowDeleteModal(true);
  };

  const handleDoDelete = () => {
    setMovies(prevMovies => prevMovies.filter(m => m !== movieUnderAction));
    setMovieUnderAction(null);
    setShowDeleteModal(false);
  };

  const handleEdit = movie => {
    setMovieUnderAction(movie);
    setShowForm(true);
  };

  const handleCancel = () => {
    setMovieUnderAction(null);
    setShowForm(false);
    setShowDeleteModal(false);
  };

  const handleWatch = movie => setMovies(prevMovies => prevMovies.map(m => (m === movie ? { ...movie, watched: !movie.watched } : m)));

  return (
    <div className='container mx-auto flex flex-col gap-10 px-6 py-10 max-w-xl'>
      <h1 className='font-bold text-xl text-center'>Movies Catalog</h1>

      {movies.length ? (
        movies.map(m => <Movie key={m.id} movie={m} onDelete={handleDelete} onEdit={handleEdit} onWatch={handleWatch} />)
      ) : (
        <p className='text-center'>There are no Movies in your List!</p>
      )}

      <button className='fixed bottom-10 right-10 w-10 h-10 rounded-full text-white bg-green-500 shadow-no-offset' onClick={() => setShowForm(true)}>
        <i className='fa fa-plus fa-lg'></i>
      </button>

      {showForm && <MovieForm editingMovie={movieUnderAction} onSubmitMovie={handleSubmitMovie} onCancel={handleCancel} />}
      {showDeleteModal && <DeleteModal deletingMovie={movieUnderAction} onDoDelete={handleDoDelete} onCancel={handleCancel} />}
    </div>
  );
};

export default App;
