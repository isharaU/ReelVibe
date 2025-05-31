import React from "react";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">🎥 Reel Vibe</h1>
      <MovieList />
    </div>
  );
};

export default App;
