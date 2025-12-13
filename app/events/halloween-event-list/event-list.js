"use client";

import Event from "./event";
import { useState } from "react";

export default function EventList({ events }) {
    const [sortBy, setSortBy] = useState("title");
    let eventsCopy = [...events];

    if (sortBy === "title") {
        eventsCopy.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sortBy === "category") {
        eventsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <div>
                <h1 className="text-2xl text-orange-400">Halloween Events & Activities</h1>
                <p className="text-gray-400">
                    Plan and organize your Halloween celebrations
                </p>
            </div>

            <div className="flex gap-80 border border-orange-400 p-4 rounded-xl mt-4 mb-5 bg-gray-900">
                <div className="flex gap-5 justify-center items-center">
                    <label className="text-gray-400" htmlFor="sort">
                        Sort By:
                    </label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="p-2 rounded-lg bg-gray-900"
                    >
                        <option value="title">Title</option>
                        <option value="category">Category</option>
                    </select>
                </div>
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
