import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transform transition">
      <img src={movie.poster} alt={movie.title} className="rounded-md mb-4 h-64 w-full object-cover" />
      <h2 className="text-xl font-semibold text-indigo-700">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.description}</p>
      <p className="mt-2 font-bold">⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
