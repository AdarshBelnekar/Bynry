import express from "express"
import 'dotenv/config.js'
import { connectDB } from "./config.js"

import alertRouters from "./routes/alertRoutes.js";
import productRouter from "./routes/productRouter.js";


const app = express();

const port = process.env.PORT || 4000

// Middleware
app.use(express.json())

// MongoDB connection
connectDB();

// Routes
app.use(productRouter);
app.use(alertRouters);


app.get('/', (req, res) => {
  res.json({ message: 'StockFlow API is running ' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})