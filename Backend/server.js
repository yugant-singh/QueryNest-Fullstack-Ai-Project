import dotenv from "dotenv"
dotenv.config()
import app from './src/app.js';
import connectDB from './src/config/database.js';


// Load environment variables


const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log("USER:", process.env.GOOGLE_USER)
console.log("CLIENT_ID:", process.env.GOOGLE_CLIENT_ID)
console.log("REFRESH:", process.env.REFRESH_TOKEN)

// Start Server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start Express server
    const server = app.listen(PORT, () => {
     console.log("Server is runnning on Port 3000")
    });

    // Graceful Shutdown
    process.on('SIGINT', () => {
      console.log('\n\n⛔ Server shutting down...');
      server.close(() => {
        console.log('✓ Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('✗ Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();
