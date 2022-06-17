import { useEffect, useState } from 'react';
import { Movie } from './Movie';

//------------------------ function movie---------------------------
export function MovieList() {
  // fetch('https://62a97468ec36bf40bdb7b7fa.mockapi.io/movies')
  //   .then(data => data.json())
  //   .then(mvs => console.log(mvs));
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch('https://62a97468ec36bf40bdb7b7fa.mockapi.io/movies', {
      method: 'GET',
    })
      .then(data => data.json())
      .then(mvs => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  const deleteMovie = id => {
    fetch(`https://62a97468ec36bf40bdb7b7fa.mockapi.io/movies/${id}`, {
      method: 'DELETE',
    }).then(() => getMovies());
  };

  return (
    <div>
      <div className="movie-list">
        {movieList.map((movie, index) => (
          <Movie
            key={movie.id}
            movie={movie}
            id={movie.id}
            deleteButton={
              <button
                onClick={() => {
                  deleteMovie(movie.id);
                }}
              >
                Delete me
              </button>
            }
          />
        ))}
      </div>
    </div>
  );
}
