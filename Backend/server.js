import dotenv from "dotenv"
dotenv.config()
import app from './src/app.js';
// import {testAi} from './src/services/ai.service.js';
import connectDB from './src/config/database.js';
import http from 'http';
import { initSocket } from './src/socket/server.socket.js';

// Load environment variables

// testAi();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const httpserver = http.createServer(app);
initSocket(httpserver);

// Start Server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start Express server
    httpserver.listen(PORT, () => {
     console.log("Server is runnning on Port 3000")
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
   


};

// Start the server
startServer();
