import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentsRouter from './routes/payments';
import tasksRouter from './routes/tasks';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'Life Assistant Dashboard API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/payments', paymentsRouter);
app.use('/api/tasks', tasksRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    success: false, 
    error: { 
      code: 'NOT_FOUND', 
      message: 'Endpoint not found' 
    } 
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false, 
    error: { 
      code: 'INTERNAL_ERROR', 
      message: 'An internal server error occurred' 
    } 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
});
