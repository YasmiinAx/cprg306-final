"use client";

import { useEffect, useState } from "react";
import Nav from "../../navbar/nav";
import { getMovies } from "../../_utils/movie-api";
import MovieCard from "../movie-card";

export default function MoviesListPage() {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function load() {
      const data = await getMovies();
      setMovies(data);
    }
    load();
  }, []);

  const filteredMovies =
    selectedCategory === "All"
      ? movies
      : movies.filter((m) => m.category === selectedCategory);

  return (
    <main>
      <Nav />

      <div className="mt-10 px-10">
        <h1 className="text-3xl text-orange-400 mb-2">Halloween Movies</h1>

        {/* FILTER BAR */}
        <div className="flex gap-4 bg-[#0d1117] border border-orange-500 p-5 rounded-xl mb-8">
          <div>
            <label className="mr-2">Filter:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All</option>
              <option>Action</option>
              <option>Horror</option>
              <option>Comedy</option>
              <option>Romance</option>
            </select>
          </div>
        </div>

        {/* MOVIE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}
