import "./App.css";
import { useEffect, useState } from "react";
//dd483a64
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=dd483a64";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&`);

    const data = await response.json();

    setMovies(data.Search);
  };

  const searchMoviesAll = async (Type) => {
    const response = await fetch(`${API_URL}&s=${Type}&`);

    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMoviesAll("movie");
  }, []);

  return (
    <div className="app">
      <h1> MovieLand </h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/122/122932.png"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {" "}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movie in here </h2>
        </div>
      )}
    </div>
  );
}

export default App;
