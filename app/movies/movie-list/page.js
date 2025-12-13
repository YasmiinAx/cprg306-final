"use client";
import Link from 'next/link';

import { useEffect, useState } from "react";
import Nav from "../../navbar/nav";
import { getMovies } from "./movie-api";
import MovieCard from "./movie-card";
import { useUserAuth } from "../_utils/auth-context";

export default function MoviesListPage() {
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { user } = useUserAuth();
    
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
    
    if (!user) {
        return (
            <div className="mt-20 text-center">
                <h1 className="text-4xl text-red-600">Access Denied!</h1> 
                <p className="text-3xl text-white">Please sign in to view your movie vault.</p>
            </div>
        );
    }

    return (
        <main>
            <Nav />
            <div className="px-5">
                <div className="flex items-start justify-between mt-5 pb-5">
                    <div>
                        <h1 className="text-2xl text-orange-400">Halloween Movies</h1>
                        <p className="text-gray-400">
                            Browse our spooky, thrilling, and heartwarming movie collection
                        </p>
                    </div>
                    <Link
                        href="/movies"
                        className="inline-flex items-center justify-center text-lg h-8 px-4 bg-red-600 text-white rounded-md hover:bg-red-800"
                    >
                        Go Back
                    </Link>
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
