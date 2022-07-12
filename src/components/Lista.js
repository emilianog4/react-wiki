import React from "react";
import peliculasJson from "../peliculas.json";
import "../styles/Lista.css";
import Movie from "./Movie";
import { useState } from "react";

const Lista = () => {
  let peliculas = peliculasJson;

  const [movie, setMovie] = useState();

  return (
    <div className="movie-body">
      <ul className="list">
        <span className="title-list">Lista de pelis</span>
        {peliculas.map((pelicula, index) => (
          <li key={pelicula.id}>
            <button onClick={() => setMovie(index)} id={index}>
              {pelicula.name} {index}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Movie id={movie} />
      </div>
    </div>
  );
};

export default Lista;
