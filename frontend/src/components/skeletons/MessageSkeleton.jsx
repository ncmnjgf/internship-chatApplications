const MessageSkeleton = () => {
  // realistic number of loading messages
  const skeletonMessages = Array.from({ length: 8 });

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-5">
      {skeletonMessages.map((_, idx) => {
        const isSender = idx % 2 !== 0;

        return (
          <div
            key={idx}
            className={`chat ${isSender ? "chat-end" : "chat-start"}`}
          >
            {/* Avatar */}
            <div className="chat-image avatar">
              <div className="w-10 h-10 rounded-full skeleton" />
            </div>

            {/* Username */}
            <div className="chat-header mb-1">
              <div className="skeleton h-3 w-20 rounded" />
            </div>

            {/* Message Bubble */}
            <div className="chat-bubble bg-transparent p-0">
              <div
                className={`skeleton rounded-lg ${
                  isSender
                    ? "h-14 w-[180px]"
                    : "h-20 w-[240px]"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageSkeleton;
