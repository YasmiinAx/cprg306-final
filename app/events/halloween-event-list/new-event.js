"use client";

import { useState } from "react"; 

export default function NewEvent( {onAddEvent} ) {
    const [event, setEvent] = useState({ 
        id: null, 
        title: "", 
        date: "", 
        time: "", 
        quantity: 1, 
        category: "spooky",
        description: "" 
    });

    const increment = () => {
        if (event.quantity < 200) {
            setEvent({...event, quantity: event.quantity + 1});
        }
    };

    const decrement = () => {
        if (event.quantity > 1) {
            setEvent({...event, quantity: event.quantity - 1});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000);
        onAddEvent({ ...event, id });
        setEvent({ 
            id: null, 
            title: "", 
            date: "", 
            time: "", 
            quantity: 1, 
            category: "spooky",
            description: "" 
        })
    };

    return (
        <form onSubmit ={handleSubmit} className="bg-gray-900 flex justify-center items-center flex-col rounded-lg w-120 h-80 p-5 mt-18">
            
            <div className="flex justify-center gap-2">
                <input 
                    type="text" 
                    id="title" 
                    placeholder="Event title" 
                    required value={event.title} 
                    onChange={(e) => setEvent({ ...event, title: e.target.value })}
                    className="bg-gray-800 rounded w-45 h-10 pl-2"
                />

                <input 
                    type="date" 
                    id="date" 
                    required value={event.date} 
                    onChange={(e) => setEvent({ ...event, date: e.target.value })}
                    className="bg-gray-800 rounded w-31 h-10 pl-2"
                />

                <input 
                    type="time" 
                    id="time" 
                    required value={event.time} 
                    onChange={(e) => setEvent({ ...event, time: e.target.value })}
                    className="bg-gray-800 rounded w-28 h-10 pl-2"
                />
            </div>

            <div className="flex w-50 h-20 justify-center items-center text-2xl mr-62">
                <input
                    type="number"
                    min={1}
                    max={200}
                    value={event.quantity}
                    onChange={(e) => setEvent({...event, quantity: Math.max(1, Math.min(200, Number(e.target.value) || 1))})}
                    className="bg-white text-black w-20 h-10 border rounded font-bold text-center"
                />                
            
                <button type="button" onClick={increment} className={`text-white font-bold w-10 h-10 m-3 rounded 
                    ${event.quantity == 200 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-orange-400 hover:bg-orange-600'}`}>+</button>
                <button type="button" onClick={decrement} className={`text-white font-bold w-10 h-10 rounded 
                    ${event.quantity == 1 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-orange-400 hover:bg-orange-600'}`}>-</button>
            </div>

            <select 
                id="category" 
                value={event.category} 
                onChange={(e) => setEvent({ ...event, category: e.target.value })}
                className="bg-gray-800 p-2 rounded w-55 h-10 ml-53 mb-4 -mt-15">
                <option value="spooky">Spooky</option>
                <option value="family-friendly">Family Friendly</option>
                <option value="bbq">BBQ</option>
                <option value="party">Party</option>
                <option value="other">Other</option>
            </select>

            <textarea 
                value={event.description} 
                onChange={(e) => setEvent({ ...event, description: e.target.value })}
                placeholder="Description (optional)"
                className="bg-gray-800 rounded w-108 h-30 p-2"
            />

            <button type="submit" className="rounded-lg mt-5 w-108 h-10 text-white bg-orange-400">
                Add Event
            </button>
        </form>
    );
}