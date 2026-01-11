import React from "react";
import { FiMessageCircle, FiUsers, FiShield } from "react-icons/fi";

const CommunityPanel = () => {
  return (
    <div className="hidden lg:flex relative items-center justify-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-lg text-center space-y-8 px-6">

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight">
            Join Our
            <span className="block text-white/80">Chat Community</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed">
            Connect instantly, share ideas, and build meaningful conversations
            with people around the world — all in one secure chat space.
          </p>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

          <div className="flex flex-col items-center gap-2 p-4 rounded-xl
                          bg-white/5 border border-white/10
                          hover:border-white/30 transition">
            <FiMessageCircle className="text-2xl text-white" />
            <p className="text-sm text-white/70">Real-time Chat</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 rounded-xl
                          bg-white/5 border border-white/10
                          hover:border-white/30 transition">
            <FiUsers className="text-2xl text-white" />
            <p className="text-sm text-white/70">Global Community</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 rounded-xl
                          bg-white/5 border border-white/10
                          hover:border-white/30 transition">
            <FiShield className="text-2xl text-white" />
            <p className="text-sm text-white/70">Secure & Private</p>
          </div>

        </div>

        {/* Footer line */}
        <p className="text-xs text-white/40">
          Join thousands of users already chatting
        </p>

      </div>
    </div>
  );
};

export default CommunityPanel;
