import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  // 🔥 Fetch + subscribe when chat changes
  useEffect(() => {
    if (!selectedUser) return;

    getMessages(selectedUser._id);
    subscribeToMessages(selectedUser._id);

    return () => {
      unsubscribeFromMessages(selectedUser._id);
    };
  }, [selectedUser?._id]);

  // 🔥 Auto scroll
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center text-zinc-500">
        Select a chat to start messaging
      </div>
    );
  }

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => {
          const isMe = message.senderId === authUser._id;
          const isLast = index === messages.length - 1;

          return (
            <div
              key={message._id}
              ref={isLast ? messageEndRef : null}
              className={`chat ${isMe ? "chat-end" : "chat-start"}`}
            >
              {/* Avatar */}
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      isMe
                        ? authUser.profilePic || "/avatar.png"
                        : selectedUser.profilePic || "/avatar.png"
                    }
                  />
                </div>
              </div>

              {/* Bubble */}
              <div
                className={`chat-bubble ${
                  isMe ? "bg-blue-500 text-white" : ""
                }`}
              >
                {message.image && (
                  <img
                    src={message.image}
                    className="max-w-[200px] rounded mb-2"
                  />
                )}
                <p className="whitespace-pre-wrap">{message.text}</p>
              </div>

              {/* Time */}
              <div className="chat-footer opacity-50 text-xs">
                {formatMessageTime(message.createdAt)}
              </div>
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
