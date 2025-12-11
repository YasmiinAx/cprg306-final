"use client";

import Costume from "./costume.js";
import NewCostume from "./new-costume.js";
import { useState } from "react";

export default function CostumeList( {costumes, onAddCostume} ) {
    const [sortBy, setSortBy] = useState("name");
    const [showAddForm, setShowAddForm] = useState(false);
    const [filterByCategory, setFilterByCategory] = useState("");
    let costumesCopy = [...costumes];

    if (sortBy === "name") {
        costumesCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "price") {
        costumesCopy.sort((a, b) => a.price - b.price);
    }
    else if (sortBy === "category") {
        costumesCopy.sort((a, b) => a.category.localeCompare(b.category));
    }

    if (filterByCategory) {
        costumesCopy = costumesCopy.filter(c => c.category === filterByCategory);
    }

    return (
        <div>
            <div className="flex gap-10 justify-between items-center mr-5 ml-5">
                <div>
                    <h1 className="text-2xl text-orange-400 mt-5">Costume Collection</h1>
                    <p className="text-gray-400">Browse our spooky, funny, and cute costume collection</p>
                </div>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-orange-400 text-white p-2 pl-4 pr-4 rounded-lg hover:bg-orange-800"
                >
                    + Add Costume
                </button>
            </div>
             
            <div className="flex gap-80 border border-orange-400 p-4 rounded-xl m-5 bg-gray-900">
                <div className="flex gap-5 justify-center items-center">
                <label className="text-gray-400" htmlFor="sort">Sort By:</label>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 rounded-lg bg-gray-900"
                >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="category">Category</option>
                </select>
            </div>

            <div className="flex gap-5 justify-center items-center">
                <label className="text-gray-400" htmlFor="sort">Filter:</label>
                <select
                    value={filterByCategory}
                    onChange={(e) => setFilterByCategory(e.target.value)}
                    className="p-2 rounded-lg bg-gray-900"
                >
                    <option value="">All</option>
                    <option value="Cute">Cute</option>
                    <option value="Scary">Scary</option>
                    <option value="Funny">Funny</option>
                </select>
            </div>
            </div>

            {showAddForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
                    <div className="bg-black border-2 border-orange-400 p-6 rounded-2xl w-[500px] h-170">
                        <h2 className="text-2xl mb-4">Add New Costume</h2>

                        <NewCostume 
                            onAddCostume={(newCostume) => {
                                onAddCostume(newCostume);
                                setShowAddForm(false);
                            }}
                            onCancel={() => setShowAddForm(false)}
                        />
                    </div>
                </div>
            )}

            <div className="flex justify-center flex-wrap mt-10 mb-10 m-5 gap-8">
                {costumesCopy.map((costume) => (
                    <Costume 
                    key={costume.id} 
                    {...costume} 
                    />
                ))}
            </div>
        </div>
    );   
}