import React from "react";
import { Link } from "react-router-dom";
import { FiSettings, FiUser, FiLogOut, FiMessageCircle } from "react-icons/fi";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity duration-200"
        >
          <FiMessageCircle size={28} className="animate-bounce-slow" />
          <span className="text-2xl font-extrabold tracking-wider">
            ChatterBox
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-10">
          {/* Profile */}
          <Link
            to="/profile"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <FiUser size={20} />
            <span className="font-medium">{authUser?.name || "Profile"}</span>
          </Link>

          {/* Settings */}
          <Link
            to="/setting"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <FiSettings size={20} />
            <span className="font-medium">Settings</span>
          </Link>

          {/* Logout */}
          <button
            onClick={logout}
            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-200 font-medium"
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
