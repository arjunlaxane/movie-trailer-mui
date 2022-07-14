import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global';

export default function EditMovie() {
  const { id } = useParams(); //object destructuring
  console.log(id);
  // console.log(movieList[id]);
  // const movie = movieList[id];
  const [movie, setMovie] = useState(null); //it is object and not array
  const getMovies = () => {
    fetch(`${API}/movies/${id}`, {
      method: 'GET',
    })
      .then(data => data.json())
      // .then(mv => console.log(mv));
      .then(mv => setMovie(mv));
  };

  useEffect(() => getMovies(), []);
  //we did conditional <re></re>ndering as it was giving empty object so undefined value as ine 27-31
  return movie ? <EditMovieForm movie={movie} /> : 'Loading...';
}

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  //here all objects are undefined as it is empty object----time lag to load movie.name and same for rest of all

  const navigate = useNavigate();
  //add movie -create -POST Method

  const editMovies = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    //PUT
    //1.Method
    //2.body-data and JSON
    //3.Header-JSON
    fetch(`${API}/movies/${movie._id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedMovie),
      headers: { 'Content-type': 'application/json' },
      // }).then(data => data.json());
    }).then(() => navigate('/movies'));

    console.log(updatedMovie);
  };

  return (
    <div className="add-movie-form">
      {/* {JSON.stringify(movie)} */}
      <TextField
        value={name}
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
        value={poster}
        onChange={event => {
          setPoster(event.target.value);
        }}
        id="standard-basic"
        label="Poster"
        variant="standard"
      />

      <TextField
        value={rating}
        onChange={event => {
          setRating(event.target.value);
        }}
        id="standard-basic"
        label="Rating"
        variant="standard"
      />

      <TextField
        value={summary}
        onChange={event => {
          setSummary(event.target.value);
        }}
        id="standard-basic"
        label="Summary"
        variant="standard"
      />

      <TextField
        value={trailer}
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
      <Button onClick={editMovies} variant="outlined">
        Save Changes
      </Button>

      {/* <button onClick={AddMovies}>Add Movie</button> */}
    </div>
  );
}
