import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useChat } from "../hooks/useChat";

const Dashboard = () => {

  const { user } = useSelector((state) => state.auth);
  const { initializeSocket } = useChat();

  useEffect(() => {

    const socket = initializeSocket();

    return () => {
      socket.disconnect();
    };

  }, []);

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;