"use client";

import Event from "./event";
import { useState } from "react";

export default function EventList( {events} ) {
    const [sortBy, setSortBy] = useState("title");
    let eventsCopy = [...events];
    
    if (sortBy === "title") 
    {
        eventsCopy.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sortBy === "category")
    {
        eventsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }
        
    return (
        <div>
            <div className="flex mt-2 gap-4 pb-5 items-center">
                <h2 className="text-white text-lg pt-1 font-medium">
                    Sort by:
                </h2>
                <button onClick={() => setSortBy("title")} className={`rounded-md h-7 w-14
                    ${sortBy === "title" ? "bg-orange-400 text-white" : "bg-gray-800"}`}>
                    Title
                </button>
                <button onClick={() => setSortBy("category")} className={`rounded-md h-7 w-22
                    ${sortBy === "category" ? "bg-orange-400 text-white" : "bg-gray-800"}`}>
                    Category 
                </button>
            </div>

            <ul className="grid gap-2 grid-cols-2">
                {eventsCopy.map((event) => (
                    <Event 
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        quantity={event.quantity}
                        category={event.category}
                        description={event.description}
                    />
                ))}
            </ul>
        </div>  
    );
}