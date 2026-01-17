import React, { useState } from "react";
import { FiUser, FiMail, FiCamera, FiEdit2 } from "react-icons/fi";
import { useAuthStore } from "../store/useAuthStore";

export default function ProfilePage() {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [select, setSelecte] = useState(null);
   
  const handleImageUpload = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = async () => {
    const base64Image = reader.result;

    // preview instantly
    setSelecte(base64Image);

    // update backend
    await updateProfile({ profilePic: base64Image });
  };

  reader.readAsDataURL(file);
};


  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Profile</h1>
          <p className="text-white/60 mt-1">View and manage your personal information</p>
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* Left: Avatar */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative group">
              <img
                src={select || authUser.profilePic || "https://ui-avatars.com/api/?name=User&background=0D1117&color=fff"}
                alt="Profile"
                className="w-36 h-36 rounded-2xl object-cover border border-white/20"
              />
              <label className="absolute -bottom-3 -right-3 bg-blue-600 p-3 rounded-xl cursor-pointer shadow-lg hover:scale-105 transition">
                <FiCamera />
                <input hidden type="file" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            {isUpdatingProfile && (
              <p className="text-sm text-white/50">Updating profile image…</p>
            )}

            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
              onClick={() => alert("Edit profile coming soon")}
            >
              <FiEdit2 /> Edit Profile
            </button>
          </div>

          {/* Right: Info */}
          <div className="md:col-span-2 space-y-6">
            <InfoRow icon={<FiUser />} label="Full Name" value={authUser?.fullName || "—"} />
            <InfoRow icon={<FiMail />} label="Email" value={authUser?.email || "—"} />

            {/* Future extensibility */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <StatCard label="Account Status" value="Active" />
              <StatCard label="Joined" value="2025" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-white/25 transition">
      <div className="text-xl text-blue-400 mt-1">{icon}</div>
      <div>
        <p className="text-xs text-white/50">{label}</p>
        <p className="text-base font-medium break-all">{value}</p>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
      <p className="text-xs text-white/50">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
