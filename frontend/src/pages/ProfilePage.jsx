import React, { useState } from "react";
import { FiUser, FiMail, FiCamera, FiEdit2 } from "react-icons/fi";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore"; // Import theme

export default function ProfilePage() {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const { theme } = useThemeStore(); // Get current theme
  const [selectedImage, setSelectedImage] = useState(null);

  if (!authUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text-primary)]">
        Loading profile...
      </div>
    );
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
    reader.onerror = () => alert("Failed to read image file");
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--bg)] text-[var(--text-primary)] transition-colors">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full blur-3xl" 
           style={{ backgroundColor: theme === "black" ? "rgba(96,165,250,0.2)" : "rgba(37,99,235,0.2)" }}/>
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full blur-3xl" 
           style={{ backgroundColor: theme === "black" ? "rgba(147,51,234,0.2)" : "rgba(147,51,234,0.2)" }}/>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[var(--accent)]">Profile</h1>
          <p className="text-[var(--text-secondary)] mt-1">
            View and manage your personal information
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-3xl border transition-colors"
             style={{
               backgroundColor: "var(--surface)",
               borderColor: theme === "black" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
               boxShadow: `0 10px 20px ${theme === "black" ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.1)"}`
             }}
        >
          {/* Left section */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative group">
              <img
                src={
                  selectedImage ||
                  authUser.profilePic ||
                  "https://ui-avatars.com/api/?name=User&background=0D1117&color=fff"
                }
                alt="Profile"
                className="w-36 h-36 rounded-2xl object-cover border transition-colors"
                style={{ borderColor: "var(--accent)" }}
              />

              <label
                className={`absolute -bottom-3 -right-3 p-3 rounded-xl shadow-lg transition
                  ${isUpdatingProfile
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[var(--accent)] hover:scale-105 cursor-pointer"
                  }`}
              >
                <FiCamera className="text-[var(--surface)]"/>
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  disabled={isUpdatingProfile}
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {isUpdatingProfile && (
              <p className="text-sm text-[var(--text-secondary)]">
                Updating profile image…
              </p>
            )}

            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl transition hover:scale-105"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--surface)"
              }}
              onClick={() => alert("Edit profile coming soon")}
            >
              <FiEdit2 /> Edit Profile
            </button>
          </div>

          {/* Right section */}
          <div className="md:col-span-2 space-y-6">
            <InfoRow
              icon={<FiUser />}
              label="Full Name"
              value={authUser.fullName || "—"}
            />
            <InfoRow
              icon={<FiMail />}
              label="Email"
              value={authUser.email || "—"}
            />

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

/* ---------- Sub Components ---------- */

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl border transition-colors"
         style={{
           backgroundColor: "var(--surface)",
           borderColor: "var(--accent)"
         }}
    >
      <div className="text-xl text-[var(--accent)] mt-1">{icon}</div>
      <div>
        <p className="text-xs text-[var(--text-secondary)]">{label}</p>
        <p className="text-base font-medium break-all">{value}</p>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="p-5 rounded-2xl border transition-colors"
         style={{
           backgroundColor: "var(--surface)",
           borderColor: "var(--accent)"
         }}
    >
      <p className="text-xs text-[var(--text-secondary)]">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
