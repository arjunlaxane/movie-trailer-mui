import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { API } from './global';
//------------------------ function movie---------------------------
export function MovieList() {
  // fetch('${API}/movies')
  //   .then(data => data.json())
  //   .then(mvs => console.log(mvs));
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: 'GET',
    })
      .then(data => data.json())
      .then(mvs => setMovieList(mvs));
  };

  const deleteMovie = id => {
    fetch(`${API}/movies/${id}`, {
      method: 'DELETE',
    }).then(() => getMovies()); //this avoid race condition
    //promise has to handle by .then to fetch data
    // getMovies();//this creates race condition
  };
  useEffect(() => getMovies(), []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movieList.map(movie => (
          <Movie
            key={movie._id}
            movie={movie}
            id={movie._id}
            //passing JSX as props
            deleteButton={
              <IconButton
                style={{ marginLeft: 'auto' }}
                color="error"
                onClick={() => {
                  deleteMovie(movie._id);
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
                  navigate(`/movies/edit/${movie._id}`);
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
