"use client";

import Image from "next/image";

export default function MovieCard({ movie }) {
    return (
        <div className="bg-[#0d1117] border border-orange-500 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform p-4">
        
            <div className="relative w-full h-60">
                <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="rounded-lg object-cover"
                />
                
                <span className="absolute top-2 right-2 border w-18 bg-black text-center text-red-500 px-2 py-1 text-md rounded-full">
                    {movie.category}
                </span>
            </div>
            
            <div className="mt-2">
                <h2 className="text-lg font-bold p-1">{movie.title}</h2>
                <p className="text-gray-400 text-sm mt-1 line-clamp-3">
                    {movie.description}
                </p>
            </div>
        </div>
    );
}
