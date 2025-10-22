"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import loginLottie from "./login.json"
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import useAOS from "@/hooks/UseAos";
import { signIn } from "next-auth/react";

const LoginPage = () => {

  useAOS();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="p-8">
        <div data-aos="fade-up" className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">

          {/* Lottie Animation */}
          <div className="w-40 mx-auto mb-4">
            <Lottie animationData={loginLottie} loop={true} />
          </div>

          <h2 className="text-3xl font-semibold text-black mb-3">
            Sign in to Continue
          </h2>

          <p className="text-gray-600 mb-11">Welcome back! Let’s connect your Google account and make your planning effortless.</p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/scheduler" })}
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
