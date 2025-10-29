"use client";
import React from "react";
import { FaEdit, FaGoogle, FaRobot, FaUnlockAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const SchedulerPage = () => {
  const HowToUseScheduler = [
    {
      step: 1,
      title: "Login or Connect with Google",
      desc: "Sign in using your Google account to securely connect your Scheduler. This allows the system to access your calendar, classroom and emails.",
      icon: <FaGoogle size={35} />,
    },
    {
      step: 2,
      title: "Allow Access to Platforms",
      desc: "Grant permission for the Scheduler to read your Google Calendar, Classroom, Gmail and other platforms. This enables AI to organize your events automatically.",
      icon: <FaUnlockAlt size={30} />,
    },
    {
      step: 3,
      title: "AI Automatically Creates Your Schedule",
      desc: "Once access is granted, the AI agent will automatically create your timetable and upcoming events. Your schedule will be structured efficiently and ready to use.",
      icon: <FaRobot size={35} />,
    },
    {
      step: 4,
      title: "Edit, Delete or Update",
      desc: "You can modify, delete or update any task or event. The AI agent assists you in making changes smartly without disrupting your entire schedule.",
      icon: <FaEdit size={30} />,
    },
  ];

  return (
    <div>
      <section className="max-w-[1350px] mx-auto px-4 md:px-3 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 mt-11 text-black relative z-10">
          How to start <span className="shiny-gradient bg-clip-text text-transparent">Smart Scheduler</span>
        </h2>
        <p className="text-gray-600 mb-16 relative z-10">
          Follow these simple steps to get started with your AI-powered Smart
          Scheduler.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HowToUseScheduler.map(({ step, title, desc, icon }) => (
            <motion.div
              whileHover={{
              scale: 1.03, 
              boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
              }}
              transition={{ duration: 0 }}
              key={step}
              className="bg-white text-left rounded-xl shadow-md p-6 hover:shadow-lg transition relative z-50"
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-gray-100 rounded-full mb-5">
                <p className="text-blue-500 text-2xl">{icon}</p>
              </div>
              <h4 className="text-2xl font-bold text-black mb-5">
                Step-{step}
              </h4>
              <h3 className="text-xl font-semibold text-black mb-5">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Connect your Google account */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 shadow-md relative z-10">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">
            Get Started with Smart Scheduler
          </h3>
          <p className="text-gray-600 mb-5">
            Before using the Smart Scheduler, please connect your Google account. This allows the AI to access your Google Calendar, Gmail and Classroom to deliver full scheduling and automation features.
          </p>
          <Link href="/login">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-11 rounded-lg font-semibold mx-auto transition">
              <FaGoogle /> Connect with Google
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SchedulerPage;
