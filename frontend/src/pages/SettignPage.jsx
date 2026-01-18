import { useThemeStore } from "../store/useThemeStore";
import { FaMoon, FaSun } from "react-icons/fa";

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 p-6">
      <h1 className="text-4xl font-bold">Choose Your Theme</h1>

      <div className="flex gap-6">
        <button
          onClick={() => setTheme("black")}
          className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all ${
            theme === "black"
              ? "bg-accent text-surface"
              : "bg-gray-800 text-gray-200"
          }`}
        >
          <FaMoon size={20} />
          Dark
        </button>

        <button
          onClick={() => setTheme("white")}
          className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all ${
            theme === "white"
              ? "bg-accent text-surface"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <FaSun size={20} />
          Light
        </button>
      </div>

      <p className="text-center max-w-md text-text-secondary">
        Your entire app will switch themes with professional transitions, including
        background, cards, buttons, inputs, links, and more.
      </p>
    </div>
  );
};

export default SettingsPage;
