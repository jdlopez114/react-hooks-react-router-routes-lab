import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesList = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h1>{movie.title}</h1>
        <ul>
          {movie.genres.map(genre => {
            return <li key={movie}>{genre}</li>
          })}
        </ul>
      </div>
      )
  })

  return <div>{moviesList}</div>;
}

export default Movies;
