import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Movie } from './Movie';

//------------------------ function movie---------------------------
export function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const AddMovies = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };

    setMovieList([...movieList, newMovie]);
  };
  return (
    <>
      <div className="add-movie-form">
        {/* <input
              onChange={event => {
                setName(event.target.value);
              }}
              placeholder="Name"
            /> */}
        <TextField
          onChange={event => {
            setName(event.target.value);
          }}
          id="standard-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          onChange={event => {
            setPoster(event.target.value);
          }}
          id="standard-basic"
          label="Poster"
          variant="standard"
        />
        <TextField
          onChange={event => {
            setRating(event.target.value);
          }}
          id="standard-basic"
          label="Rating"
          variant="standard"
        />
        <TextField
          onChange={event => {
            setSummary(event.target.value);
          }}
          id="standard-basic"
          label="Summary"
          variant="standard"
        />
        {/* <input
              onChange={event => {
                setPoster(event.target.value);
              }}
              placeholder="Poster"
            /> */}
        {/* <input
              onChange={event => {
                setRating(event.target.value);
              }}
              placeholder="Rating"
            /> */}
        {/* <input
              onChange={event => {
                setSummary(event.target.value);
              }}
              placeholder="Summary"
            /> */}

        {/* <p>name:{name}</p> */}
        {/* <p>poster:{poster}</p> */}
        {/* <p>rating:{rating}</p> */}
        {/* <p>summary:{summary}</p> */}

        {/* <button onClick={AddMovies}>Add Movie</button> */}
        <Button onClick={AddMovies} variant="outlined">
          Add Movie
        </Button>
      </div>

      <div className="movie-list">
        {movieList.map((movie, index) => (
          <Movie key={index} movie={movie} id={index} />
        ))}
      </div>
    </>
  );
}
