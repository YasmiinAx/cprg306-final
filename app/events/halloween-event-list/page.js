"use client";

import EventList from "./event-list";
import NewEvent from "./new-event";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getEvents, addEvent } from "../_services/event-list-service";
import Link from "next/link";
import Nav from "../../navbar/nav";

export default function Page() {
    const [events, setEvents] = useState([]);
    const { user } = useUserAuth();

    const handleAddEvent = async (event) => {
        if (!user) return; 
        const newId = await addEvent(user.uid, event);
        const newEvent = { id: newId, ...event };
        setEvents((prev) => [...prev, newEvent]);
    };  

    const loadEvents = async () => {
        if (!user) return; 
        const events = await getEvents(user.uid);
        setEvents(events);
};

    useEffect(() => {
        if (user) {
            loadEvents();
        }
    }, [user]);

    if (!user) {
        return (
            <div className="mt-20 text-center">
                <h1 className="text-4xl text-red-600">Access Denied!</h1> 
                <p className="text-3xl text-white">Please sign in to view your event list.</p>
            </div>
        );
    }

    return (
    <main>
        <Nav />
        <Link 
            className="inline-flex items-center justify-center text-center text-lg mt-4 ml-4 w-25 h-8 bg-red-600 text-white rounded-md hover:bg-red-800 hover:cursor-pointer"  
            href="/events">
            Go Back
        </Link>
        
        <div className="flex justify-center mt-5 mb-10 gap-10">
                <NewEvent onAddEvent={handleAddEvent} />
                <EventList events={events} />
        </div>
    </main>
    );
}   