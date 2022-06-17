import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useEffect } from 'react';

export function MovieDetails() {
  // console.log(useParams());
  // const { movieid } = useParams(); //object destructuring
  // console.log(movieid);
  // console.log(movieList[movieid]);
  // const movie = movieList[movieid];
  const [movie, setMovie] = useState({});
  const getMovies = () => {
    fetch('https://62a97468ec36bf40bdb7b7fa.mockapi.io/movies', {
      method: 'GET',
    })
      .then(data => data.json())
      .then(mv => setMovie(mv));
  };

  useEffect(() => getMovies(), []);
  const styles = {
    color: movie.rating > 8 ? 'green' : 'red',
  };

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="550px"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        {/* <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button> */}
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
