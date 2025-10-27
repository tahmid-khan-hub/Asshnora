"use client";
import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { IoMdAttach } from "react-icons/io";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const TasksPage = () => {
  const HowtoUseTask = [
    {
      step: 1,
      title: "Upload Files or Notes",
      desc: "Start by uploading your photo, PDF or handwritten notes. These files help the AI agent understand your materials, whether they’re study notes, project outlines or schedules that need organizing.",
      icon: <IoMdAttach size={40} />,
    },
    {
      step: 2,
      title: "Tell AI What You Need",
      desc: "In the chat box, describe what you want the AI to do with your uploaded files. For example, you can say things like 'Create a weekly routine based on this PDF.' The AI agent will process your input intelligently.",
      icon: <AiOutlineMessage size={40} />,
    },
    {
      step: 3,
      title: "AI Organizes and Structures Your Work",
      desc: "After understanding your instructions, the AI will automatically organize, categorize or even design your schedule. It structures everything logically, whether it’s turning notes into a plan or breaking big goals into smaller tasks.",
      icon: <FaRobot size={40} />,
    },
    {
      step: 4,
      title: "Edit, Customize and Update",
      desc: "You can freely edit or customize what the AI created. Want to adjust your schedule or add new items? Just tell the AI agent to 'update this and that,' and it will make the changes instantly for you.",
      icon: <FaRegCircleCheck size={40} />,
    },
  ];

  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [chat, setChat] = useState<{ sender: "user" | "ai"; text: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSend = async () => {
    if (!message && !file) return;

    // Add user  message to chat
    setChat((prev) => [...prev, { sender: "user", text: message }]);

    setLoading(true);

    try {
      // If file uploaded then convert it to base64
      if (file) {
        const reader = new FileReader();
        const fileBase64: string = await new Promise((resolve, reject) => {
          reader.onload = () =>
            resolve(reader.result?.toString().split(",")[1] || "");
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const fileData = fileBase64;
        const fileType = file.type;

        // Backend API
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message,
            fileData,
            fileType,
          }),
        });

        const data = await res.json();

        // Reply
        if (data.reply) {
          setChat((prev) => [...prev, { sender: "ai", text: data.reply }]);
        } else {
          setChat((prev) => [
            ...prev,
            { sender: "ai", text: "Sorry, I couldn’t process that." },
          ]);
        }
      }
    } catch (error) {
      console.log("Error: ", error);
      setChat((prev) => [
        ...prev,
        { sender: "ai", text: "Error connecting to AI." },
      ]);
    }

    // Reset input & loading
    setLoading(false);
    setMessage("");
    setFile(null);
  };

  return (
    <div>
      {/* How to use it */}
      <section className="max-w-[1350px] mx-auto px-4 md:px-3 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 mt-11 text-black relative z-10">
          How to start{" "}
          <span className="shiny-gradient bg-clip-text text-transparent">
            Smart Task Manager
          </span>
        </h2>
        <p className="text-gray-600 mb-16 relative z-10">
          Follow these simple steps to get started with your AI-powered smart
          task manager
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HowtoUseTask.map(({ step, title, desc, icon }) => (
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

        {/* Task Manager */}
        <div className="flex items-center justify-center mt-24">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8 flex flex-col">
            {/* Chat Box */}
            <div className="h-96 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-6">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`my-2 flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <p className="text-gray-500 text-sm mt-2">AI thinking...</p>
              )}
            </div>

            {/* Upload File */}
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="mb-4"
            />

            {/* Input Field */}
            <div className="relative w-full flex items-center">
              <input
                type="text"
                placeholder="Type your task or instruction..."
                className="w-full border border-gray-500 text-black rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="absolute right-3 text-gray-600 hover:text-black"
                title="Send Message"
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
