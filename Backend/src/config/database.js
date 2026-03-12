import mongoose from 'mongoose';




const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI 
    
    const connection = await mongoose.connect(mongoUri);
    console.log(`✓ MongoDB connected successfully`);
   
    return connection;
  } catch (error) {
    console.error('✗ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.warn('⚠ MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
  console.error('✗ MongoDB error:', error);
});

export default connectDB;
