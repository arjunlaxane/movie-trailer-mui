import React from 'react';
import { BasicForm } from './BasicForm';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { MovieDetails } from './MovieDetails';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TicTacToe } from './TicTacToe';

function App() {
  const initial_Movie_List = [
    {
      name: 'RRR',
      poster:
        'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
      rating: 8.8,
      summary:
        'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
      trailer: 'https://www.youtube.com/embed/f_vbAtFSEc0',
    },
    {
      name: 'Iron man 2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
      rating: 7,
      summary:
        'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
      trailer: 'https://www.youtube.com/embed/wKtcmiifycU',
    },
    {
      name: 'No Country for Old Men',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: 'https://www.youtube.com/embed/38A__WT3-o0',
    },
    {
      name: 'Jai Bhim',
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
      summary:
        'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
      rating: 8.8,
      trailer: 'https://www.youtube.com/embed/nnXpbTFrqXA',
    },
    {
      name: 'The Avengers',
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
      trailer: 'https://www.youtube.com/embed/eOrNdBpGMv8',
    },
    {
      name: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
      rating: 8.6,
      summary:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
      name: 'Baahubali',
      poster: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
      rating: 8,
      summary:
        'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
      trailer: 'https://www.youtube.com/embed/sOEg_YZQsTI',
    },
    {
      name: 'Ratatouille',
      poster:
        'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
      rating: 8,
      summary:
        'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
      trailer: 'https://www.youtube.com/embed/NgsQ8mVkN8w',
    },
  ];

  const [movieList, setMovieList] = useState(initial_Movie_List);
  const navigate = useNavigate();
  const [mode, setMode] = useState('dark');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: '100vh', borderRadius: '0px' }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => navigate('/')} color="inherit">
                Home
              </Button>
              {/* </Toolbar> */}
              {/* <Toolbar> */}
              <Button onClick={() => navigate('/movies')} color="inherit">
                Movies
              </Button>
              {/* </Toolbar> */}
              {/* <Toolbar> */}
              <Button
                onClick={() => navigate('movies/add-movie')}
                color="inherit"
              >
                ADD MOVIE
              </Button>

              {/* </Toolbar> */}
              {/* <Toolbar> */}
              <Button onClick={() => navigate('/color-game')} color="inherit">
                COLOR GAME
              </Button>
              <Button onClick={() => navigate('/tic-tac-toe')} color="inherit">
                TIC-TAC-TOE
              </Button>
              <Button
                style={{ marginLeft: 'auto' }}
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                color="inherit"
                startIcon={
                  mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {mode === 'light' ? 'dark' : 'light'} mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* <nav> */}
          {/* <ul> */}
          {/* <li> */}
          {/* do not use anchor tag, page will reload */}
          {/* <Link to="/">Home</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/* <Link to="/color-game">Color game</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/* <Link to="/movie">Movies</Link> */}
          {/* </li> */}
          {/* </ul> */}
          {/* </nav> */}
          <section className="route-container">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route
                path="/movie/:movieid"
                element={<MovieDetails movieList={movieList} />} //prop
              /> */}

              <Route
                path="/movies/:id"
                element={<MovieDetails />} //prop
              />

              <Route
                path="movies/add-movie"
                element={
                  // <AddMovie movieList={movieList} setMovieList={setMovieList} />
                  <AddMovie />
                } //prop
              />
              <Route path="/color-game" element={<AddColor />} />

              <Route path="/tic-tac-toe" element={<TicTacToe />} />
              {/* 
              <Route
                path="/movie"
                element={
                  <MovieList
                    movieList={movieList}
                    setMovieList={setMovieList}
                  />
                }
              /> */}

              <Route path="/movies" element={<MovieList />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="/basic-form" element={<BasicForm />} />

              {/* * matches any path */}
              <Route path="/404" element={<NotFound />} />

              {/* old to new route */}
              <Route
                path="/films"
                element={<Navigate replace to="/movies" />}
              />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </section>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Home() {
  return <h1>Welcome to Movies App</h1>;
}

function NotFound() {
  return (
    <img
      src="https://tse1.mm.bing.net/th?id=OIP.qxUanw2MngZD-Ng9uux2PQHaGD&pid=Api&P=0&w=198&h=162"
      alt="404 not found"
    />
  );
}
export default App;
