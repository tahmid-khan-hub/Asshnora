"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import loginLottie from "./login.json"
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="p-8">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">

          {/* Lottie Animation */}
          <div className="w-40 mx-auto mb-4">
            <Lottie animationData={loginLottie} loop={true} />
          </div>

          <h2 className="text-3xl font-semibold text-blue-500 mb-8">
            Sign in to Continue
          </h2>

          <button
            onClick={() => alert("Google Sign-In logic here")}
            className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>

          <div className="divider divider-neutral text-black">OR</div>

          <div className="mt-4 flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
            <Link
              href="/"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
