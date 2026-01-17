import { THEME } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const SettignPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight">Appearance</h2>
        <p className="text-base-content/70 mt-2 text-lg">
          Choose a theme that matches your vibe
        </p>
      </div>

      {/* Theme Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {THEME.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            data-theme={t}
            className={`group relative rounded-2xl border p-4 text-left transition-all duration-300
              ${theme === t
                ? "border-primary ring-2 ring-primary shadow-lg scale-[1.03]"
                : "border-base-300 hover:shadow-md hover:-translate-y-1"
              }
            `}
          >
            {/* Color Preview */}
            <div className="flex gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary"></div>
              <div className="h-10 w-10 rounded-lg bg-secondary"></div>
            </div>

            {/* Theme Name */}
            <p className="font-semibold capitalize text-base">
              {t}
            </p>
            <p className="text-xs text-base-content/60 mt-1">
              Primary & secondary palette
            </p>

            {/* Active Indicator */}
            {theme === t && (
              <span className="absolute top-3 right-3 badge badge-primary">
                Active
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettignPage;
