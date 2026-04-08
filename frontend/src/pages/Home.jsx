import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import "../css/MovieCard.css";

function Home() {
  const movies = [
    { id: 1, title: "Kiriku", release_date: "2023" },
    { id: 2, title: "One Peace", release_date: "2026" },
    { id: 3, title: "Hunter", release_date: "2024" },
    { id: 4, title: "Khabili", release_date: "2023" },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handlesearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form action="" onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search a movie...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
