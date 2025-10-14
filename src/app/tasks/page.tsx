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
      icon: <CiBookmarkPlus size={30} />
    },
    {
      step: 2,
      title: "Attach Files",
      desc: "Upload photos, PDFs or notes for better context.",
      icon: <IoMdAttach size={30} />
    },
    {
      step: 3,
      title: "Ask AI",
      desc: "Let AI organize, prioritize or suggest next actions.",
      icon: <AiOutlineMessage size={30} />
    },
    {
      step: 4,
      title: "Track Progress",
      desc: "Mark tasks as done and watch your progress grow.",
      icon: <FaRegCircleCheck size={30} />
    },
  ];
  return (
    <div>
      <section className="max-w-[1350px] mx-auto px-4 md:px-3 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          How to Use Smart Task Manager
        </h2>
        <p className="text-gray-600 mb-10">
          Follow these simple steps to get started with your AI-powered to-do
          list.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HowtoUseTask.map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-blue-500 mb-3">
                Step {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TasksPage;
