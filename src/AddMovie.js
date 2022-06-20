import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const [trailer, setTrailer] = useState('');
  const navigate = useNavigate();
  //add movie -create-POST Method

  const AddMovies = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // setMovieList([...movieList, newMovie]);

    //POST
    //1.Method
    //2.body-data and JSON
    //3.Header-JSON

    fetch('https://62a97468ec36bf40bdb7b7fa.mockapi.io/movies', {
      method: 'POST',
      body: JSON.stringify(newMovie),
      headers: { 'Content-type': 'application/json' },
    })
      // .then(data => console.log(data.json()))//promise
      .then(() => navigate('/movie'));
    console.log(JSON.stringify(newMovie));
    console.log(newMovie);
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

      <TextField
        onChange={event => {
          setTrailer(event.target.value);
        }}
        id="standard-basic"
        label="Trailer"
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
