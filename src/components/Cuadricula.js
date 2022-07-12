import React from "react";
// import Movie from './Movie';
import "../styles/Cuadricula.css";
import peliculasJson from "../peliculas.json";

const Cuadricula = () => {
  let peliculas = peliculasJson;

  return (
    <>
      <div className="cuadricula">
        {peliculas.map((pelicula) => (
          <div className="contenedor" key={pelicula.id}>
            <img src={pelicula.img} alt={pelicula.name} className="image" />
            <p className="text-title"> {pelicula.name} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cuadricula;
