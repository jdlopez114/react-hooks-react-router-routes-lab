import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsList = actors.map(actor => {
    return (
      <div key={actor.name}>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return <div>{actorsList}</div>;
}

export default Actors;
