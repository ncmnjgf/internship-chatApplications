import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import CommunityPanel from "../components/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLogging } = useAuthStore();
  const { theme } = useThemeStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden transition-colors flex items-center justify-center"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
    >
      {/* Background Glows */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor:
            theme === "black" ? "rgba(96,165,250,0.2)" : "rgba(37,99,235,0.2)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor:
            theme === "black" ? "rgba(147,51,234,0.2)" : "rgba(147,51,234,0.2)",
        }}
      />

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 min-h-screen items-center justify-center">
        {/* ===== LEFT — Login Card ===== */}
        <div className="flex items-center justify-center px-5 py-10 lg:px-24 lg:py-0 w-full">
          <div
            className="w-full max-w-md rounded-3xl p-8 shadow-2xl transition-colors flex flex-col gap-6"
            style={{
              backgroundColor: "var(--surface)",
              border: `1px solid ${
                theme === "black" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
              }`,
              boxShadow: `0 10px 20px ${
                theme === "black" ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.1)"
              }`,
            }}
          >
            {/* Header */}
            <div className="text-center">
              <h1
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                Welcome Back 👋
              </h1>
              <p
                className="mt-2 text-sm sm:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                Login to your account
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              {/* Email */}
              <div className="flex items-center w-full gap-3">
                <FiMail
                  className="text-2xl"
                  style={{ color: "var(--accent)" }}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="flex-1 h-12 rounded-xl px-4 text-sm focus:outline-none transition"
                  style={{
                    backgroundColor: "var(--surface)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--accent)`,
                  }}
                />
              </div>

              {/* Password */}
              <div className="flex items-center w-full gap-3 relative">
                <FiLock
                  className="text-2xl"
                  style={{ color: "var(--accent)" }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  className="flex-1 h-12 rounded-xl px-4 text-sm focus:outline-none transition"
                  style={{
                    backgroundColor: "var(--surface)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--accent)`,
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLogging}
                className="w-full h-12 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--surface)",
                  opacity: isLogging ? 0.6 : 1,
                }}
              >
                {isLogging ? "Logging in..." : "Login"}
              </button>
            </form>
            {/* Signup */}
            <p
              className="text-center mt-4 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              New user?{" "}
              <Link
                to="/signup"
                className="font-medium"
                style={{ color: "var(--accent)" }}
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* ===== RIGHT — Community Panel ===== */}
        <div className="hidden lg:flex justify-center items-center w-full">
          <CommunityPanel />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
