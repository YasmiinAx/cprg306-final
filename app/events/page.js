"use client";
import Link from 'next/link';

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Nav from '../navbar/nav';

export default function Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div>
            <Nav />

            {!user && (
                <div className="mt-20 text-center">
                    <h1 className="text-3xl text-white mt-40">Access Your Events — Sign in With GitHub!</h1> 
                    <button 
                        className="text-2xl w-90 h-12 bg-white text-black hover:bg-gray-200 hover:cursor-pointer rounded-md block mx-auto mt-10"
                        onClick={gitHubSignIn}>
                            <img src="/git/github.png" alt="GitHub Logo" className="inline-block w-6 h-6 ml-2 mb-1 mr-2"/>
                            Sign In with GitHub
                    </button>
                </div>
            )}

            {user && (
            <div className="mt-8 text-center text-xl">
                <div className="bg-gray-900 rounded-2xl w-160 h-140 p-6 mx-auto">
                    <h1 className="text-4xl mb-1">Welcome!</h1>
                    <h1 className="text-2xl">You're now signed in to your Events Dashboard.</h1>
                    
                    <img 
                        className="mt-3 mb-3 mx-auto rounded-full border-3 border-orange-400 w-50" 
                        src={user.photoURL} 
                        alt={user.displayName || user.reloadUserInfo?.screenName}
                    /> 
                
                    <p className="text-2xl">Welcome {user.displayName || user.reloadUserInfo?.screenName}!</p>
                    <p className="text-sm text-gray-400 mb-5">{user.email}</p>

                    <div className="flex flex-col gap-6 mt-5 pl-10 pr-10">
                        <Link 
                            className="text-white bg-orange-400 hover:bg-orange-800 hover:cursor-pointer p-2 rounded-lg" 
                            href="events/halloween-event-list">
                            Explore Your Events
                        </Link>
                        <button 
                            className="bg-red-600 text-white rounded-md hover:bg-red-700 hover:cursor-pointer p-2"  
                            onClick={firebaseSignOut}>Sign Out
                        </button>
                    </div>
                </div>                
            </div>
            )}
        </div>
    );
}