"use client"
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div>
    <h1 className="text-center font-bold text-3xl mb-3 relative z-10">Main Features</h1>
    <p className="text-center text-gray-600 mb-16 relative z-10">
      Explore powerful AI tools that simplify your workflow and keep you effortlessly organized every day.
    </p>
    <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto gap-6">
      {/* Feature 1: To-Do / Tasks */}
      <motion.div whileHover={{scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",}} transition={{ duration: 0.1 }} className="flex flex-col items-start bg-white shadow-md rounded-lg p-6 flex-1 justify-between relative z-10">
        <div className="w-[70px] h-[70px] flex items-center justify-center bg-gray-100 rounded-full mb-5">
          <p className="text-blue-500 text-2xl"><IoDocumentTextOutline size={40}/></p>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          AI-Powered Smart Task Manager
        </h3>
        <p className="text-gray-700 mb-4">
          Create daily, weekly or monthly tasks effortlessly. Add photos, PDFs
          or simply tell our AI via chat to organize your tasks. You can update,
          edit or get suggestions from the AI for smarter task management.
        </p>
        <button className="text-blue-500 font-semibold hover:underline">
          Try AI Task Manager →
        </button>
      </motion.div>

      {/* Feature 2: Upcoming / Scheduler */}
      <motion.div whileHover={{scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",}} transition={{ duration: 0.1 }} className="flex flex-col items-start bg-white shadow-md rounded-lg p-6 flex-1 justify-between relative z-10">
        <div className="w-[70px] h-[70px] flex items-center justify-center bg-gray-100 rounded-full mb-5">
          <p className="text-blue-500 text-2xl"><FaRegCalendarAlt size={36} /></p>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          AI-Powered Smart Scheduler
        </h3>
        <p className="text-gray-700 mb-4 ">
          Connect your Google account to automatically fetch assignments,
          meetings and events. The AI agent organizes everything in a table or
          map view. You can also give instructions, add new events or edit
          existing ones via AI chat.
        </p>
        <button className="text-blue-500 font-semibold hover:underline">
          Connect & Start →
        </button>
      </motion.div>
    </div></div>
  );
};

export default Features;
