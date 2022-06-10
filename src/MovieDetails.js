import { useNavigate, useParams } from 'react-router-dom';

export function MovieDetails({ movieList }) {
  console.log(useParams());
  const { movieid } = useParams();
  console.log(movieid);
  console.log(movieList[movieid]);
  const movie = movieList[movieid];
  const styles = {
    color: movie.rating > 8 ? 'green' : 'red',
  };

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}🎇🎈🎈🖼</h2>
          <p style={styles} className="movie-rating">
            {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
