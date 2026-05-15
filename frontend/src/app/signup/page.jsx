"use client";
import { useState } from "react";
import Link from "next/link";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.fullName,
    });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-serif font-semibold text-gray-900 mb-1">
          Create Account
        </h1>
        <p className="text-gray-500 text-sm">
          Start your adventure with Wanderlust
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md w-full max-w-lg p-6">
        {/* Full Name */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Full Name
          </label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md px-4 py-2.5">
            <FiUser className="text-gray-400 text-base flex-shrink-0" />
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-transparent w-full text-sm text-gray-700 focus:outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Email Address
          </label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md px-4 py-2.5">
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
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Password
          </label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md px-4 py-2.5">
            <FiLock className="text-gray-400 text-base flex-shrink-0" />
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="bg-transparent w-full text-sm text-gray-700 focus:outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Confirm Password
          </label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md px-4 py-2.5">
            <FiLock className="text-gray-400 text-base flex-shrink-0" />
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="bg-transparent w-full text-sm text-gray-700 focus:outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Create Account Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-md transition-colors mb-3"
        >
          Create Account
        </button>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm mb-3">
          Or sign up with
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-md py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors mb-4">
          <FcGoogle className="text-xl" />
          Sign Up With Google
        </button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-cyan-500 font-semibold hover:text-cyan-600 transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
