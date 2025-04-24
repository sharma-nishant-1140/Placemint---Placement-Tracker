import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Placemint</div>

      <ul className="flex flex-row justify-evenly space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-blue-500 transition-colors">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
        </li>
      </ul>

      <div>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;