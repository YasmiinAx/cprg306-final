import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getEvents = async (userId) => {
    try {
        const eventsCollectionRef = collection(db, "users", userId, "events");
        const eventsSnapshot = await getDocs(eventsCollectionRef);
        
        const mappedEvents = eventsSnapshot.docs.map((eventDoc) => ({
            id: eventDoc.id,
            ...eventDoc.data(),
        }));
        return mappedEvents;
    } 
    catch (error) {
        console.error("Error in getEvents: ", error);
    }
};

export const addEvent = async (userId, event) => {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "events"), event);
        return docRef.id;
    } 
    catch (error) {
        console.error("Error in addEvent: ", error);
    }
};
