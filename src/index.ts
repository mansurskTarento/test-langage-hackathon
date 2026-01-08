/**
 * Main entry point for the application
 */

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req: Request, res: Response): void => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'test-langage-hackathon',
  });
});

// API endpoints
app.get('/api/version', (req: Request, res: Response): void => {
  res.status(200).json({
    version: '1.0.0',
    name: 'test-langage-hackathon',
    author: 'Mansur Shaik',
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response): void => {
  console.error(err);
  res.status(500).json({
    error: err.message,
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(port, (): void => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
