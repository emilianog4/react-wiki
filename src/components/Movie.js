import React from "react";
import peliculasJson from "../peliculas.json";
import "../styles/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Movie = (props) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  let peliculas = peliculasJson;

  let nro = props.id;

  return (
    <ul className="movies-info">
      {peliculas
        .filter((pelicula) => pelicula.id === nro)
        .map((pelicula, index) => (
          <>
            <div className="movie" key={pelicula.id} id={index}>
              <div className="movieTitle">{pelicula.name}</div>
              <div className="img">
                <img
                  src={pelicula.img}
                  alt={pelicula.name}
                  className="movie-img"
                />
              </div>
              <div className="year">{pelicula.year}</div>
              <div className="description">{pelicula.description}</div>
              <div className="likes">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="like"
                  onClick={() => setLike(like + 1)}
                />{" "}
                {like}
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  className="dislike"
                  onClick={() => setDislike(dislike + 1)}
                />{" "}
                {dislike}
              </div>
            </div>
          </>
        ))}
    </ul>
  );
};

export default Movie;
