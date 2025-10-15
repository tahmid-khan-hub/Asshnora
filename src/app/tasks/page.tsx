"use client";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { IoMdAttach } from "react-icons/io";

const TasksPage = () => {
  const HowtoUseTask = [
    {
      step: 1,
      title: "Add a Task",
      desc: "Click 'Add Task' to create a new to-do item.",
      icon: <CiBookmarkPlus size={40} />,
    },
    {
      step: 2,
      title: "Attach Files",
      desc: "Upload photos, PDFs or notes for better context.",
      icon: <IoMdAttach size={40} />,
    },
    {
      step: 3,
      title: "Ask AI",
      desc: "Let AI organize, prioritize or suggest next actions.",
      icon: <AiOutlineMessage size={40} />,
    },
    {
      step: 4,
      title: "Track Progress",
      desc: "Mark tasks as done and watch your progress grow.",
      icon: <FaRegCircleCheck size={40} />,
    },
  ];
  return (
    <div>
      {/* How to use it */}
      <section className="max-w-[1350px] mx-auto px-4 md:px-3 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 mt-11 text-black">
          How to Use Smart Task Manager
        </h2>
        <p className="text-gray-600 mb-16">
          Follow these simple steps to get started with your AI-powered smart
          task manager
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HowtoUseTask.map(({ step, title, desc, icon }) => (
            <div
              key={step}
              className="bg-white text-left rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-gray-100 rounded-full mb-5">
                <p className="text-blue-500 text-2xl">{icon}</p>
              </div>
              <h4 className="text-2xl font-bold text-black mb-5">
                Step-{step}
              </h4>
              <h3 className="text-xl font-semibold text-black mb-5">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        {/* Task Manager */}
        <div className="flex items-center justify-center mt-24">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8 flex flex-col items-center">
            {/* Upload Section */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl w-full h-60 mb-6 hover:border-blue-400 transition">
              <button
                className="flex flex-col items-center text-gray-600 hover:text-blue-500"
                title="Add photo or pdf"
              >
                <FiPlus size={32} />
                <span className="mt-2 text-sm font-medium">
                  Add photo or PDF
                </span>
              </button>
            </div>

            {/* Input Field with icons */}
            <div className="relative w-full flex items-center">
              <button
                className="absolute left-3 text-gray-500 hover:text-black"
                title="Attach file"
              >
                <FiPlus size={20} />
              </button>

              {/* Input */}
              <input
                type="text"
                placeholder="Type your task..."
                className="w-full border border-gray-500 text-black rounded-full py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />

              <button
                className="absolute right-3 text-gray-600 hover:text-black"
                title="Add Task"
              >
                <FiArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TasksPage;
