"use client";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="p-8">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8">
            Sign in to Continue
          </h2>

          <button
            onClick={() => alert("Google Sign-In logic here")}
            className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>

          <div className="mt-8">
            <Link
              href="/"
              className="text-blue-600 hover:underline text-sm font-medium"
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
