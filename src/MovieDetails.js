import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState, useEffect } from 'react';
import { API } from './global';

export function MovieDetails() {
  // console.log(useParams());
  const { id } = useParams(); //object destructuring
  // console.log(id);
  // console.log(movieList[id]);
  // const movie = movieList[id];
  const [movie, setMovie] = useState({}); //it is object and not array
  const getMovies = () => {
    //fetch returns promise--Response--here data is promise--now we will do data.json()---data.json() returns promise state---mv will give object we r looking
    fetch(`${API}/movies/${id}`, {
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
