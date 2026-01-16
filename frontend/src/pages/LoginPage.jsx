import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useAuthStore } from "../store/useAuthStore";
import CommunityPanel from "../components/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLogging } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      
      {/* Global background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 min-h-screen">

        {/* ===== LEFT / TOP (Mobile) — Login Card ===== */}
        <div className="flex items-center justify-center px-5 py-10 lg:px-24 lg:py-0">
          <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Welcome Back 👋
              </h1>
              <p className="text-white/60 mt-2 text-sm sm:text-base">
                Login to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div className="relative group">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-12 rounded-xl bg-black/40 border border-white/10 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-12 rounded-xl bg-black/40 border border-white/10 pl-11 pr-14 text-sm text-white placeholder-white/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLogging}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
              >
                {isLogging ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Signup */}
            <p className="text-center text-white/60 mt-6 text-sm">
              New user?{" "}
              <Link
                to="/signup"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* ===== RIGHT / BOTTOM (Mobile) — Community Panel ===== */}
        <div className="hidden lg:flex">
          <CommunityPanel />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
