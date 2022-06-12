import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import Stack from '@mui/material/Stack';

export function Movie({ movie, id }) {
  // console.log(movie);
  // console.log(id);
  //conditional styling
  const styles = {
    color: movie.rating > 8 ? 'green' : 'red',
  };
  const [show, setShow] = useState(true);

  const parastyles = {
    display: show ? 'block' : 'none',
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating">
          ⭐{movie.rating}
        </p>
      </div>
      {/* <button onClick={() => setShow(!show)}>summary</button> */}

      <IconButton
        color="primary"
        onClick={() => setShow(!show)}
        aria-label="Toggle summary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      {/* <Link to={`/movie/${id}`}>Info</Link> */}
      {/* <button onClick={() => navigate(`/movie/${id}`)}>Info</button> */}

      <IconButton
        color="primary"
        onClick={() => navigate(`/movie/${id}`)}
        aria-label="movie details"
      >
        <InfoIcon />
      </IconButton>

      {/* navigate doesn't know where to go....it just changes url */}
      <p style={parastyles} className="movie-summary">
        {movie.summary}
      </p>

      {/* conditional rendering */}

      {/* {show ? <p className="movie-summary">{movie.summary}</p> : null} */}

      <Counter />
    </div>
  );
}
