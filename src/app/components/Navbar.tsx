"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const links = (
    <>
      <li>
        <Link href={"/tasks"} className={`font-semibold`}>
          Tasks
        </Link>
      </li>
      <li>
        <Link href={"/scheduler"} className={`font-semibold`}>
          Scheduler
        </Link>
      </li>
    </>
  );

  const Menulinks = (
    <>
      <li>
        <Link href={"/tasks"} className={`font-semibold`}>
          Tasks
        </Link>
      </li>
      <li>
        <Link href={"/schedule"} className={`font-semibold`}>
          Schedule
        </Link>
      </li>
      <li>
        <Link href={"/login"} className={`font-semibold`}>
          Login
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-background/55 backdrop-blur-md text-white">
      <div className="max-w-[1350px] mx-auto w-full flex justify-between items-center px-4 md:px-3">
        {/* Left side */}
        <Link
          href="/"
          className="font-passero text-xl -ml-1 md:-ml-0.5 lg:-ml-0 font-bold text-black"
        >
          Asshnora
        </Link>

        {/* Right side */}
        <div className="navbar-end">
          <ul className="hidden lg:flex gap-5 text-black">{links}</ul>

          <button className="btn hidden lg:block ml-3">Login</button>

          {/* Mobile menu */}
          <div className="lg:hidden relative -mr-1 " ref={menuRef}>
            {/* Hamburger Icon */}
            <label
              tabIndex={0}
              className="cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Dropdown menu */}
            {isOpen && (
              <>
                <ul
                  tabIndex={0}
                  className="absolute right-0 mt-3 w-60 p-4 rounded-2xl shadow-lg
                 bg-white/30 backdrop-blur-xl border border-white/20
                  flex flex-col gap-4 z-50 text-black"
                >
                  {Menulinks}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
