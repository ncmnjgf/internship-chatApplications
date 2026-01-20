import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { FiMail, FiUser, FiLock, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen items-center">
        {/* LEFT: Signup Form */}
        <div className="flex items-center justify-center px-10 lg:pl-24">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition hover:border-white/30">
            <div className="p-8 space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Create your account
                </h1>
                <p className="text-white/60 text-sm">
                  Experience the next generation platform
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/60">
                    <FiUser size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="flex-1 h-12 rounded-xl bg-black/40 border border-white/10 px-4 text-sm placeholder-white/40 focus:border-white focus:ring-1 focus:ring-white/40 outline-none transition"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/60">
                    <FiMail size={20} />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 h-12 rounded-xl bg-black/40 border border-white/10 px-4 text-sm placeholder-white/40 focus:border-white focus:ring-1 focus:ring-white/40 outline-none transition"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Password */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/60">
                    <FiLock size={20} />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full h-12 rounded-xl bg-black/40 border border-white/10 px-4 pr-20 text-sm placeholder-white/40 focus:border-white focus:ring-1 focus:ring-white/40 outline-none transition"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white transition"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSigningUp}
                  className="group w-full h-12 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border hover:border-white transition-all duration-300"
                >
                  {isSigningUp ? (
                    <span className="loading loading-spinner text-black">
                      Loading
                    </span>
                  ) : (
                    <>
                      Create account
                      <FiArrowRight className="group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>
              </form>

              {/* Already have account */}
              <div className="text-center">
                <p className="text-base-content/60">
                  Already have an account?{" "}
                  <Link to="/login" className="link link-primary">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Community / Auth Pattern */}
        <div className="flex items-center justify-center px-10 lg:pr-24">
          <AuthImagePattern />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
