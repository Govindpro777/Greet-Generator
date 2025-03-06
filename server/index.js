import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/greet', (req, res) => {
  const { name } = req.query;
  
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  
  return res.json({
    message: `Hello, ${name}! Welcome to Younglabs.`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});