import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMovies() {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(function () {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
