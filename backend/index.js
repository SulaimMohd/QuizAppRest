import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRouts.js';
import questionRoutes from './routes/qestionRouts.js'
import submissionRoutes from './routes/submissionRoutes.js'
import feedbackRoutes from './routes/feedbackRoutes.js'
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies and credentials
})); // Enable CORS
app.use(morgan('dev'))

app.get('/', (req, res)=>{
  res.send("hello world")
})

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/submit', submissionRoutes);
app.use("/api/feedback", feedbackRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});