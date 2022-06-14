import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function AddMovie({ movieList, setMovieList }) {
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
    <div className="add-movie-form">
      <TextField
        onChange={event => {
          setName(event.target.value);
        }}
        id="standard-basic"
        label="Name"
        variant="standard"
      />

      {/* <input
        onChange={event => {
          setPoster(event.target.value);
        }}
        placeholder="Poster"
      /> */}
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

      {/* <p>name:{name}</p> */}
      {/* <p>poster:{poster}</p> */}
      {/* <p>rating:{rating}</p> */}
      {/* <p>summary:{summary}</p> */}
      <Button onClick={AddMovies} variant="outlined">
        Add Movie
      </Button>

      {/* <button onClick={AddMovies}>Add Movie</button> */}
    </div>
  );
}
