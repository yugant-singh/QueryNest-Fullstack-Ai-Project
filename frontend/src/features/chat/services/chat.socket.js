import { io } from "socket.io-client";

let socket;

export const initializeSocket = () => {

  if (!socket) {

    socket = io("http://localhost:3000", {
      withCredentials: true
    });

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

  }

  return socket;
};