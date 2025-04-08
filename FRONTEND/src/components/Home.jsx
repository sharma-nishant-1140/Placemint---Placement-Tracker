import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <nav className="flex justify-between w-full mb-6 px-4 text-lg font-semibold">
        <div className="flex space-x-6">
          <span>About</span>
          <span>Collaborations</span>
          <span>Feedbacks</span>
        </div>
        <span
          className="cursor-pointer hover:text-blue-500"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </nav>

      <div className="text-3xl font-bold mb-4 text-center">
        PLACEMINT - THE PLACEMENT TRACKER
      </div>

      <button
        onClick={() => navigate("/register")}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition-all"
      >
        Get Started!
      </button>
    </div>
  );
}
