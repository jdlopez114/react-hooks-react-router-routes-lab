import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map(director => {
    return (
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })


  return <div>{directorsList}</div>;
}

export default Directors;
