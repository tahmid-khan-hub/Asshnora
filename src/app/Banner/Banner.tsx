"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


const Banner = () => {
  return (
    <section className="text-center py-28 px-4 relative z-10">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        <span className="shiny-gradient bg-clip-text text-transparent">
          Smarter Planning Starts Here
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-12">
        Let AI organize your tasks and schedule automatically.
      </p>
      <Link
        href="/tasks"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 shadow-md"
      >
        Explore
        <FaArrowRightLong size={18}/>
      </Link>
    </section>
  );
};

export default Banner;
