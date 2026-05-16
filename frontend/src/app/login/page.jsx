"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-serif font-semibold text-gray-900 mb-1">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-sm">
          Sign in to continue your adventure
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md w-full max-w-lg p-8">
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Email Address
          </label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md px-4 py-3">
            <FiMail className="text-gray-400 text-base flex-shrink-0" />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-transparent w-full text-sm text-gray-700 focus:outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Password
          </label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md px-4 py-3">
            <FiLock className="text-gray-400 text-base flex-shrink-0" />
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="bg-transparent w-full text-sm text-gray-700 focus:outline-none placeholder-gray-400"
            />
          </div>
          <div className="text-right mt-1.5">
            <Link
              href="/forgot-password"
              className="text-xs text-cyan-500 hover:text-cyan-600 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition-colors mb-4"
        >
          Login
        </button>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm mb-4">
          Or login in with
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-md py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors mb-6">
          <FcGoogle className="text-xl" />
          Login With Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-cyan-500 font-semibold hover:text-cyan-600 transition-colors"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
