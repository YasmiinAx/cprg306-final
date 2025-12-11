"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function MoviesPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="text-center mt-12 flex justify-center">

      <div className="w-full max-w-xl bg-[#0d1117] border border-orange-500 rounded-xl p-10 shadow-lg shadow-orange-500/20">

        {/* Sign In / Sign Out */}
        {user ? (
          <button
            className="border px-4 py-2 text-orange-400 hover:text-white hover:border-orange-400 transition mb-6"
            onClick={firebaseSignOut}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="border px-4 py-2 text-orange-400 hover:text-white hover:border-orange-400 transition mb-6"
            onClick={gitHubSignIn}
          >
            Sign In with GitHub
          </button>
        )}

        {/* Logged-In Section */}
        {user && (
          <div className="mt-2">

            <h2 className="text-4xl font-extrabold text-orange-400 mb-2">
              Welcome,
            </h2>

            <p className="text-lg text-gray-300">Glad to have you back!</p>

            <p className="text-md text-gray-400 mt-1">
              Signed in as <span className="text-orange-300">{user.email}</span>
            </p>

            <img
              src={user.photoURL}
              alt="profile"
              className="mx-auto mt-6 w-40 rounded-lg shadow-lg shadow-orange-500/40"
            />

            <p className="text-gray-300 mt-8 text-lg">
              Ready to explore something spooky?
            </p>

            <Link
              href="/movies/list"
              className="text-orange-400 underline hover:text-white transition block mt-3 text-lg"
            >
              Enter the Movie Vault 
            </Link>

          </div>
        )}
      </div>
    </div>
  );
}
