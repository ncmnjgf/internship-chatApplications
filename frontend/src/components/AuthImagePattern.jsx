import React from "react";
import { FiMessageCircle, FiUsers, FiShield } from "react-icons/fi";

const CommunityPanel = () => {
  return (
    <div className="hidden lg:flex items-center justify-center h-full px-10">
      
      {/* Glass Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl overflow-hidden">

        {/* Background glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center space-y-8">

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Join Our
              <span className="block text-blue-400">
                Chat Community
              </span>
            </h1>

            <p className="text-white/60 text-base leading-relaxed">
              Connect instantly, share ideas, and build meaningful
              conversations with people around the world — all in one
              secure chat space.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-8">

            <Feature
              icon={<FiMessageCircle />}
              label="Real-time Chat"
            />

            <Feature
              icon={<FiUsers />}
              label="Global Users"
            />

            <Feature
              icon={<FiShield />}
              label="Secure & Private"
            />

          </div>

          {/* Footer */}
          <p className="text-xs text-white/40 pt-4">
            Trusted by thousands of active users worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl
                  bg-black/40 border border-white/10
                  hover:border-white/30 hover:scale-105
                  transition-all">
    <div className="text-2xl text-white">{icon}</div>
    <p className="text-sm text-white/70">{label}</p>
  </div>
);

export default CommunityPanel;
