"use client";

export default function Event({ id, title, date, time, quantity, category, description }) {
    return (
        <li className="relative border border-orange-400 bg-gray-900 rounded-xl p-4 mb-2 w-100 font-sans">
            
            <p className="absolute bg-black top-4 right-4 border border-red-600 rounded-full px-2 py-1 text-red-600 text-sm capitalize">
                {category}
            </p>

            <h2 className="text-2xl text-orange-400 pr-20">
                {title}
            </h2>

            <div className="flex gap-8 text-gray-400 mb-1 mt-1">
                <p>Date: {date}</p>
                <p>Time: {time}</p>
            </div>

            <p className="underline text-orange-200">Available Spots: {quantity}</p>
            <p>Description: {description}</p>
        </li>
    );
}
