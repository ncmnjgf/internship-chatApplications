import { FaUser } from "react-icons/fa";

const Avatar = ({ src, name = "", size = 40 }) => {
  // Get first letter for initials
  const initial = name?.charAt(0)?.toUpperCase();

  return (
    <div
      className="rounded-full bg-base-300 flex items-center justify-center overflow-hidden border"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : initial ? (
        <span className="font-semibold text-base-content">
          {initial}
        </span>
      ) : (
        <FaUser className="text-base-content/60" size={size / 2} />
      )}
    </div>
  );
};

export default Avatar;
