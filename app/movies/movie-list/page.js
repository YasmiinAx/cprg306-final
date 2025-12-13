"use client";

import { useEffect, useState } from "react";
import Nav from "../../navbar/nav";
import { getMovies } from "./movie-api";
import MovieCard from "./movie-card";

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
            <div className="px-5">
            <div>
                <h1 className="text-2xl text-orange-400 mt-5">Halloween Movies</h1>
                <p className="text-gray-400 mb-5">Browse our spooky, thrilling, and heartwarming movie collection</p>
            </div>
            
            {/* FILTER BAR */}
            <div className="flex gap-80 border border-orange-400 p-6 rounded-xl mb-5 bg-gray-900">
                <div className="flex gap-5 justify-center items-center">
                    <label className="text-gray-400" htmlFor="sort">Sort By:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 rounded-lg bg-gray-900"
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
            <div className="grid grid-cols-4 gap-5 pb-10">
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            </div>
        </main>
    );
}
