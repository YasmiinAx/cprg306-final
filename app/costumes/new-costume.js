"use client";
import { useState } from "react";

export default function NewCostume( { onAddCostume, onCancel } ) {
    const [costume, setCostume] = useState({
        id: "",
        name: "",
        category: "Cute",
        description: "",
        price: "",
        img: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = `COS${Math.floor(Math.random() * 1000000)}`;
        onAddCostume({...costume, id});
        setCostume({
            id: "",
            name: "",
            category: "Cute",
            description: "",
            price: "",
            img: ""
        });
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label className="mb-1" htmlFor="name">Costume Name</label>
                <input
                type="text"
                placeholder="e.g. Vampire"
                value={costume.name}
                onChange={(e) => setCostume({ ...costume, name: e.target.value })}
                className="bg-gray-900 p-3 rounded-lg"
                required
            />
            </div>
            <div className="flex flex-col">
                <label className="mb-1" htmlFor="category">Category</label>
                <select
                    value={costume.category}
                    onChange={(e) => setCostume({ ...costume, category: e.target.value })}
                    className="bg-gray-900 p-3 rounded-lg"
                    required
                >
                    <option value="Cute">Cute</option>
                    <option value="Scary">Scary</option>
                    <option value="Funny">Funny</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="mb-1" htmlFor="price">Price</label>
                <input
                type="number"
                placeholder="Price"
                value={costume.price}
                onChange={(e) => setCostume({ ...costume, price: e.target.value })}
                className="bg-gray-900 p-3 rounded-lg"
                required
            />
            </div>

            <div className="flex flex-col">
                <label className="mb-1" htmlFor="description">Description</label>
                <textarea
                    placeholder="Description"
                    value={costume.description}
                    onChange={(e) => setCostume({ ...costume, description: e.target.value })}
                    className="bg-gray-900 p-3 rounded-lg h-25"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1" htmlFor="url">Image URL</label>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={costume.img}
                    onChange={(e) => setCostume({ ...costume, img: e.target.value })}
                    className="bg-gray-900 p-3 rounded-lg"
                    required
                />
            </div>

            <div className="flex justify-end gap-3 mt-4">
                <button
                    type="button"
                    className="border border-red-500 text-white p-2 w-30 rounded-lg  hover:bg-red-500 hover:text-white transition"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-orange-400 border border-orange-400 w-50 p-2 rounded-lg  hover:bg-black hover:text-orange-400 transition"
                >
                    Add Costume
                </button>
                
            </div>
        </form>
    );
}