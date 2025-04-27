import React from "react";
import Spiral from "../assets/icons/spiral";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left hand side */}
      <div className="hidden md:flex relative w-1/2 items-center justify-center bg-gradient-to-b from-[#0572E2] to-[#021E7C] p-8">
        {/* Spriral at bottom left */}
        <div className="absolute bottom-0 left-0 w-32">
          <Spiral />
        </div>

        {/* PR Text */}
        <div className="absolute bottom-16 left-16">
          <h1 className="text-white font-bold text-6xl">PR</h1>
        </div>
      </div>

      {/* Right hand side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6 md:p-12">
        <form className="w-full max-w-md flex flex-col gap-6">
          {/* Welcome Text */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#191919] mb-1">
              Hello
            </h3>
            <p className="text-sm md:text-base text-[#191919]">Register</p>
          </div>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />

          {/* Phone Number Input */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-[#B2B2B2] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0572E2] focus:border-[#0572E2]"
            required
          />

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#044AB1] hover:bg-[#0572E2] text-white font-semibold py-3 rounded-full transition-all"
          >
            Register
          </button>

          {/* Already have account */}
          <p className="text-center text-[#191919] text-sm">
            Forgotten Password?{' '}
            <Link
              to="/"
              className="text-[#0572E2] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
