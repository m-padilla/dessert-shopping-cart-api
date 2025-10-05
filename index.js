import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dessertRoute from './routes/dessert.routes.js';

dotenv.config()

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST, MONGODB_COLLECTION, MONGODB_CLUSTER } = process.env;
const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_COLLECTION}?retryWrites=true&w=majority&appName=${MONGODB_CLUSTER}`;

const PORT = process.env.PORT;
const app = express();

// middleware to handle routes
app.use(cors({
  origin: "https://dessert-shopping-cart.onrender.com", // <-- frontend dev server
  methods: ["GET", "POST"],
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// route 
app.use('/', dessertRoute);

app.listen(PORT || 3000, () => {
  console.log(`Server is running on Port:${PORT}/`)
})

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((error) => {
    console.log(error, JSON.stringify(error, 11));
  });
