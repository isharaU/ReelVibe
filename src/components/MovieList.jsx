import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    rating: 8.8,
    poster: "/src/assets/inception.jpg" 
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Space, time, and love. Another Nolan masterpiece.",
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
  },
  {
    id: 3,
    title: "The Matrix",
    description: "Reality is an illusion. Welcome to the Matrix.",
    rating: 8.7,
    poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
  }
];

const MovieList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
