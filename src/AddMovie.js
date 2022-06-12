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
      <input
        onChange={event => {
          setName(event.target.value);
        }}
        placeholder="Name"
      />
      <input
        onChange={event => {
          setPoster(event.target.value);
        }}
        placeholder="Poster"
      />
      <input
        onChange={event => {
          setRating(event.target.value);
        }}
        placeholder="Rating"
      />
      <input
        onChange={event => {
          setSummary(event.target.value);
        }}
        placeholder="Summary"
      />

      {/* <p>name:{name}</p> */}
      {/* <p>poster:{poster}</p> */}
      {/* <p>rating:{rating}</p> */}
      {/* <p>summary:{summary}</p> */}

      <button onClick={AddMovies}>Add Movie</button>
    </div>
  );
}
