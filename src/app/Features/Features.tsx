import React from "react";

const Features = () => {
  return (
    <div>
        <h1 className="text-center font-bold text-3xl mb-8">Features</h1>
        <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto gap-6">
      {/* Feature 1: To-Do / Tasks */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 flex-1 justify-between">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-xl font-semibold mb-2">
          Smart To-Do & Task Manager
        </h3>
        <p className="text-gray-700 mb-4">
          Create daily, weekly or monthly tasks effortlessly. Add photos, PDFs
          or simply tell our AI via chat to organize your tasks. You can update,
          edit or get suggestions from the AI for smarter task management.
        </p>
        <button className="text-blue-600 font-semibold hover:underline">
          Try AI To-Do →
        </button>
      </div>

      {/* Feature 2: Upcoming / Scheduler */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 flex-1 justify-between">
        <div className="text-4xl mb-4">📅</div>
        <h3 className="text-xl font-semibold mb-2">
          AI-Powered Upcoming Scheduler
        </h3>
        <p className="text-gray-700 mb-4 ">
          Connect your Google account to automatically fetch assignments,
          meetings and events. The AI agent organizes everything in a table or
          map view. You can also give instructions, add new events or edit
          existing ones via AI chat.
        </p>
        <button className="text-green-600 font-semibold hover:underline">
          Connect & Start →
        </button>
      </div>
    </div></div>
  );
};

export default Features;
