"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { signOut, user } = useAuth();

  return (
    <>
      {/* Header */}
      <header className="relative z-50  bg-slate-900 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                TrueMatch
              </span>
            </Link>

            {/* Desktop Nav */}
            {/* Only show navigation links if user is authenticated */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {user && (
                <>
                  <Link
                    href="/matches"
                    className="text-gray-400 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
                  >
                    Discover
                  </Link>
                  <Link
                    href="/matches/list"
                    className="text-gray-400 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
                  >
                    Matches
                  </Link>
                  <Link
                    href="/chat"
                    className="text-gray-400 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
                  >
                    Messages
                  </Link>
                  <Link
                    href="/profile"
                    className="text-gray-400 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
                  >
                    Profile
                  </Link>
                </>
              )}
              {user ? (
                <button
                  onClick={signOut}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/auth"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Sign In
                </Link>
              )}
            </nav>

            {/* Mobile Toggle */}
            {user ? (
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-2xl z-50 text-gray-400 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? "✕" : "☰"}
              </button>
            ) : (
              <Link
                href="/auth"
                className="md:hidden inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign In
              </Link>
            )}
            {/* <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl z-50 text-gray-400 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? "✕" : "☰"}
            </button> */}
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white p-6
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="mt-16 flex flex-col gap-6 text-lg font-medium">
            <Link href="/matches" onClick={() => setOpen(false)}>
              Discover
            </Link>
            <Link href="/matches/list" onClick={() => setOpen(false)}>
              Matches
            </Link>
            <Link href="/chat" onClick={() => setOpen(false)}>
              Messages
            </Link>
            <Link href="/profile" onClick={() => setOpen(false)}>
              Profile
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                signOut();
              }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
