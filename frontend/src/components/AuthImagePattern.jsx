import React from "react";
import { FiMessageCircle, FiUsers, FiShield } from "react-icons/fi";
import { useThemeStore } from "../store/useThemeStore";

const CommunityPanel = () => {
  const { theme } = useThemeStore();

  return (
    <div className="hidden lg:flex items-center justify-center h-full px-10">
      {/* Glass Card */}
      <div
        className="relative w-full max-w-lg rounded-3xl p-10 shadow-2xl overflow-hidden transition-colors"
        style={{
          backgroundColor: theme === "black" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.05)",
          border: theme === "black" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
        }}
      >
        {/* Background Glows */}
        <div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl"
          style={{
            backgroundColor:
              theme === "black" ? "rgba(96,165,250,0.2)" : "rgba(37,99,235,0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl"
          style={{
            backgroundColor:
              theme === "black" ? "rgba(147,51,234,0.2)" : "rgba(147,51,234,0.2)",
          }}
        ></div>

        <div className="relative z-10 text-center flex flex-col items-center gap-8">
          {/* Heading */}
          <div className="space-y-3">
            <h1
              className="text-4xl font-bold tracking-tight"
              style={{ color: theme === "black" ? "#fff" : "#111" }}
            >
              Join Our
              <span
                className="block"
                style={{ color: theme === "black" ? "#3b82f6" : "#3b82f6" }}
              >
                Chat Community
              </span>
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: theme === "black" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)" }}
            >
              Connect instantly, share ideas, and build meaningful conversations with people around the world — all in one secure chat space.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <Feature icon={<FiMessageCircle />} label="Real-time Chat" theme={theme} />
            <Feature icon={<FiUsers />} label="Global Users" theme={theme} />
            <Feature icon={<FiShield />} label="Secure & Private" theme={theme} />
          </div>

          {/* Footer */}
          <p
            className="text-xs pt-4"
            style={{ color: theme === "black" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}
          >
            Trusted by thousands of active users worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, label, theme }) => (
  <div
    className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all hover:scale-105"
    style={{
      backgroundColor: theme === "black" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.05)",
      border: theme === "black" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
    }}
  >
    <div
      className="text-2xl"
      style={{ color: theme === "black" ? "#3b82f6" : "#3b82f6" }}
    >
      {icon}
    </div>
    <p
      className="text-sm"
      style={{ color: theme === "black" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)" }}
    >
      {label}
    </p>
  </div>
);

export default CommunityPanel;
