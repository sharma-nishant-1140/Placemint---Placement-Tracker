import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="flex flex-row justify-between w-full text-lg font-semibold sticky-top-0 pt-2 pb-5 border-b">
        <div className="flex flex-row justify-evenly">
          <span
            className="cursor-pointer hover:text-blue-500 mx-3"
            onClick={() => navigate("/about")}>
            About
          </span>
          <span
            className="cursor-pointer hover:text-blue-500 mx-3"
            onClick={() => navigate("/collab")}>
            Collaborations
          </span>
          <span
            className="cursor-pointer hover:text-blue-500 mx-3"
            onClick={() => navigate("/feedback")}>
            Feedbacks
          </span>
        </div>
        <span
          className="cursor-pointer hover:text-blue-500 mx-3"
          onClick={() => navigate("/login")}>
          Login
        </span>
      </nav>

      <div className="flex items-center text-3xl font-bold text-center h-40">
        PLACEMINT - THE PLACEMENT TRACKER
      </div>

      <button
        onClick={() => navigate("/register")}
        className="text-black bg-blue-400 px-6 py-2 shadow-lg hover:bg-blue-600 hover:text-white border border-black border-solid w-50">
        Get Started!
      </button>
    </div>
  );
}
