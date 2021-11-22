const Movie = ({ title, coverImg, rating, genres, summary }) => {
  return (
    <li>
      <h1>{title}</h1>
      <img src={coverImg} alt={title} />
      <div>
        <span>{rating}</span>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
      <p>{summary}</p>
    </li>
  );
};

export default Movie;
