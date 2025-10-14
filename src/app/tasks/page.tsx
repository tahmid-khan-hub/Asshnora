import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdAttach } from "react-icons/io";

const TasksPage = () => {
  const HowtoUseTask = [
    {
      step: 1,
      title: "Add a Task",
      desc: "Click 'Add Task' to create a new to-do item.",
      icon: <CiBookmarkPlus size={40} />
    },
    {
      step: 2,
      title: "Attach Files",
      desc: "Upload photos, PDFs or notes for better context.",
      icon: <IoMdAttach size={40} />
    },
    {
      step: 3,
      title: "Ask AI",
      desc: "Let AI organize, prioritize or suggest next actions.",
      icon: <AiOutlineMessage size={40} />
    },
    {
      step: 4,
      title: "Track Progress",
      desc: "Mark tasks as done and watch your progress grow.",
      icon: <FaRegCircleCheck size={40} />
    },
  ];
  return (
    <div>
      <section className="max-w-[1350px] mx-auto px-4 md:px-3 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 mt-11 text-black">
          How to Use Smart Task Manager
        </h2>
        <p className="text-gray-600 mb-16">
          Follow these simple steps to get started with your AI-powered smart task manager
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HowtoUseTask.map(({ step, title, desc, icon }) => (
            <div
              key={step}
              className="bg-white text-left rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <p className="text-blue-500 mb-5">{icon}</p>
              <h4 className="text-2xl font-bold text-black mb-5">
                Step-{step}
              </h4>
              <h3 className="text-xl font-semibold text-black mb-5">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TasksPage;
