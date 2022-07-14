import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const movieValidationSchema = yup.object({
  name: yup.string().required('Why not fill this name?'),
  poster: yup
    .string()
    .required('Why not fill this poster?')
    .min(5, 'Need a bigger poster'),
  rating: yup.number().required('Why not fill this rating?').min(0).max(10),
  poster: yup
    .string()
    .required('Why not fill this poster?')
    .min(5, 'Need a bigger poster'),
  summary: yup
    .string()
    .required('Why not fill this summary?')
    .min(20, 'Need a big summary'),
  trailer: yup
    .string()
    .required('Why not fill this trailer?')
    .min(5, 'need a big trailer'),
});

export default function AddMovie() {
  // const [name, setName] = useState('');
  // const [poster, setPoster] = useState('');
  // const [rating, setRating] = useState('');
  // const [summary, setSummary] = useState('');
  // const [trailer, setTrailer] = useState('');
  const navigate = useNavigate();
  //add movie -create-POST Method

  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        name: '',
        poster: '',
        rating: '',
        summary: '',
        trailer: '',
      },
      validationSchema: movieValidationSchema,
      onSubmit: newMovie => {
        console.log('On submit', newMovie);
        AddMovies(newMovie);
      },
      // this is callback function :(values)=>{
      // console.log("On submit",values);
      // }
      //formik by default give result in object. Unlike earlier where we use to create object: name poster trailer....
    });
  const AddMovies = newMovie => {
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
    //we will delete this newmovie as formik calls values....we will write newMovie in onsubmit
    // setMovieList([...movieList, newMovie]);

    //POST
    //1.Method
    //2.body-data and JSON
    //3.Header-JSON

    fetch('${API}/movies', {
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
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        // onChange={event => {
        //   setName(event.target.value);
        // }}
        value={values.name}
        onChange={handleChange}
        name="name"
        onBlur={handleBlur}
        id="standard-basic"
        label="Name"
        variant="standard"
        error={touched.name && errors.name}
        // helperText={touched.name && errors.name ? 'Incorrect entry.' : ''}
        helperText={touched.name && errors.name ? errors.name : ''}
      />

      {/* <input
        onChange={event => {
          setPoster(event.target.value);
        }}
        placeholder="Poster"
      /> */}
      <TextField
        // onChange={event => {
        //   setPoster(event.target.value);
        // }}
        value={values.poster}
        onChange={handleChange}
        name="poster"
        onBlur={handleBlur}
        id="standard-basic"
        label="Poster"
        variant="standard"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : ''}
      />

      <TextField
        // onChange={event => {
        //   setRating(event.target.value);
        // }}
        value={values.rating}
        onChange={handleChange}
        name="rating"
        onBlur={handleBlur}
        id="standard-basic"
        label="Rating"
        variant="standard"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : ''}
      />

      <TextField
        // onChange={event => {
        //   setSummary(event.target.value);
        // }}
        value={values.summary}
        onChange={handleChange}
        name="summary"
        onBlur={handleBlur}
        id="standard-basic"
        label="Summary"
        variant="standard"
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : ''}
      />

      <TextField
        // onChange={event => {
        //   setTrailer(event.target.value);
        // }}
        value={values.trailer}
        onChange={handleChange}
        name="trailer"
        onBlur={handleBlur}
        id="standard-basic"
        label="Trailer"
        variant="standard"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : ''}
      />

      {/* <p>name:{name}</p> */}
      {/* <p>poster:{poster}</p> */}
      {/* <p>rating:{rating}</p> */}
      {/* <p>summary:{summary}</p> */}
      {/* <Button onClick={AddMovies} variant="outlined">
        Add Movie
      </Button> */}

      <Button type="submit" variant="outlined">
        Add Movie
      </Button>

      {/* <button onClick={AddMovies}>Add Movie</button> */}
    </form>
  );
}
