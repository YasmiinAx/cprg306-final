"use client";

import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-[#0d1117] border border-orange-500 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition p-2">
      <div className="relative">
        <Image
          src={movie.image}
          width={500}
          height={300}
          alt={movie.title}
          className="rounded-lg w-full h-64 object-cover"
        />

        <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
          {movie.category}
        </span>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p className="text-gray-300 text-sm mt-1">{movie.description}</p>

        {movie.price && (
          <p className="text-orange-400 font-semibold mt-2">{movie.price}</p>
        )}
      </div>
    </div>
  );
}
