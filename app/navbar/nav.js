"use client";   
import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex bg-gray-900 text-white p-4">
            <div className="flex gap-4 mr-10">
                <img src="/nav/logo.svg" alt="Boo n' Goods Logo" className="w-8 h-8"/>
                <h1 className="text-orange-400 text-2xl">Boo n' Goods</h1>
            </div>
            <div className="flex gap-8 text-lg ml-auto mr-5">
                <Link href="/">Home</Link>
                <Link href="/costumes">Costumes</Link>
            </div>
        </div>
    );
}