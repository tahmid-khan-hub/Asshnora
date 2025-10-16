"use client"
import React from "react";
import { FaLock, FaRobot, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <section className="text-center py-28 ">
      <h2 className="text-3xl font-bold mb-3 relative z-10">Privacy First</h2>
      <p className="text-gray-600 max-w-[800px] mx-auto mb-10 relative z-10">
        We value your trust. All your tasks, files and schedules remain private
        and encrypted. Our AI only processes your data to assist you, never to
        collect or share it.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div whileHover={{scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",}} transition={{ duration: 0.1 }} className="w-[70px] h-[70px] flex items-center justify-center bg-gray-200  rounded-full mb-3"><FaLock size={36} className="text-blue-500 mb-3 mt-1" /></motion.div>
          <p className="font-medium text-gray-600">Secure Storage</p>
        </div>

        <div className="flex flex-col items-center">
          <motion.div whileHover={{scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",}} transition={{ duration: 0.1 }} className="w-[70px] h-[70px] flex items-center justify-center bg-gray-200  rounded-full mb-3"><FaUserShield size={38} className="text-blue-500 mb-3 ml-1 mt-1" /></motion.div>
          <p className="font-medium text-gray-600">No Third-Party Sharing</p>
        </div>

        <div className="flex flex-col items-center">
          <motion.div whileHover={{scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",}} transition={{ duration: 0.1 }} className="w-[70px] h-[70px] flex items-center justify-center bg-gray-200  rounded-full mb-3"><FaRobot size={36} className="text-blue-500 mb-3 mt-1" /></motion.div>
          <p className="font-medium text-gray-600">AI Transparency</p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
