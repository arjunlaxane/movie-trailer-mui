import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
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
    }).then(() => getMovies()); //this avoid race condition
    //promise has to handle by .then to fetch data
    // getMovies();//this creates race condition
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movieList.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            id={movie.id}
            //passing JSX as props
            deleteButton={
              <IconButton
                style={{ marginLeft: 'auto' }}
                color="error"
                onClick={() => {
                  deleteMovie(movie.id);
                }}
                aria-label="movie details"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                color="primary"
                onClick={() => {
                  navigate(`/movie/edit/${movie.id}`);
                }}
                aria-label="movie details"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
