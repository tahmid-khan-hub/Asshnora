import React from "react";
import { FaLock, FaRobot, FaUserShield } from "react-icons/fa";

const Privacy = () => {
  return (
    <section className="text-center py-28 ">
      <h2 className="text-3xl font-bold mb-3">Privacy First</h2>
      <p className="text-gray-600 max-w-[800px] mx-auto mb-10">
        We value your trust. All your tasks, files and schedules remain private
        and encrypted. Our AI only processes your data to assist you, never to
        collect or share it.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center">
          <FaLock size={36} className="text-blue-500 mb-3" />
          <p className="font-medium text-gray-700">Secure Storage</p>
        </div>

        <div className="flex flex-col items-center">
          <FaUserShield size={36} className="text-blue-500 mb-3" />
          <p className="font-medium text-gray-700">No Third-Party Sharing</p>
        </div>

        <div className="flex flex-col items-center">
          <FaRobot size={36} className="text-blue-500 mb-3" />
          <p className="font-medium text-gray-700">AI Transparency</p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
