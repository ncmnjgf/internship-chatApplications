import { FaUsers } from "react-icons/fa";

const SidebarSkeleton = () => {
  const skeletonContacts = Array.from({ length: 10 });

  return (
    <aside
      className="h-full w-20 lg:w-72 border-r border-base-300
      flex flex-col bg-base-100"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full px-4 py-5">
        <div className="flex items-center gap-3">
          <FaUsers size={20} className="opacity-60" />
          <span className="font-semibold hidden lg:block text-sm opacity-70">
            Contacts
          </span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="flex-1 overflow-y-auto py-2">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="w-full px-3 py-2 flex items-center gap-3"
          >
            {/* Avatar */}
            <div className="shrink-0">
              <div className="skeleton w-11 h-11 rounded-full" />
            </div>

            {/* Text */}
            <div className="hidden lg:flex flex-col gap-2 flex-1">
              <div className="skeleton h-4 w-32 rounded" />
              <div className="skeleton h-3 w-20 rounded" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
