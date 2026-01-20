import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  // 👥 Get users
  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load users");
    } finally {
      set({ isUsersLoading: false });
    }
  },

  // 🎯 Select user (CRITICAL FIX)
  setSelectedUser: (selectedUser) => {
    set({
      selectedUser,
      messages: [], // 🔥 clear old chat immediately
    });
  },

  // 💬 Get messages
  getMessages: async (userId) => {
    if (!userId) return;

    set({ isMessagesLoading: true, messages: [] });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load messages");
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  // 📤 Send message
  sendMessage: async (messageData) => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );

      // 🔥 safe append
      set((state) => ({
        messages: [...state.messages, res.data],
      }));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
    }
  },

  // 🔔 Subscribe (SAFE VERSION)
  subscribeToMessages: () => {
    const socket = useAuthStore.getState().socket;
    if (!socket) return;

    socket.off("newMessage"); // prevent duplicates

    socket.on("newMessage", (newMessage) => {
      const { selectedUser } = get();
      if (!selectedUser) return;

      if (
        newMessage.senderId === selectedUser._id ||
        newMessage.receiverId === selectedUser._id
      ) {
        set((state) => ({
          messages: [...state.messages, newMessage],
        }));
      }
    });
  },

  // 🔕 Unsubscribe
  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    if (!socket) return;

    socket.off("newMessage");
  },
}));
