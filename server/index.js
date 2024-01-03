// Import necessary modules and packages
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './api/routes/user.route.js';
import authRouter from './api/routes/auth.router.js';
import propertyRouter from './api/routes/property.route.js';

// Load environment variables from a .env file
dotenv.config();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Create an instance of Express
const app = express();

// Enable CORS and set up middleware for handling requests
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server listening on port 5000');
});

// Define API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/property', propertyRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(err);

    let errorDetails = {};
    if (process.env.NODE_ENV === 'development') {
        errorDetails.stack = err.stack;
    }

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        ...errorDetails,
    });
});
