import { Movie } from './Movie';

//------------------------ function movie---------------------------
export function MovieList({ movieList }) {
  return (
    <div className="movie-list">
      {movieList.map((movie, index) => (
        <Movie key={index} movie={movie} id={index} />
      ))}
    </div>
  );
}
