import { io } from "socket.io-client";

let socket;

export const initializeSocket = () => {
  if (!socket) {
  
    const URL = import.meta.env.VITE_SOCKET_URL || window.location.origin

    socket = io(URL, {
      withCredentials: true
    });

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });
  }

  return socket;
};