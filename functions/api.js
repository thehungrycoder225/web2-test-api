import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from '../routes/author.js';
import serverless from 'serverless-http';
import { handler } from './../app';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/express-mongo-api',
    {}
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

// Register routes
app.use('/.netlify/functions/api', router);

app.get('/', (req, res) => res.send('Api is Running..'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}`)
);

const handler = serverless(app);
export default handler;
