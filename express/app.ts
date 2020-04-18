/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

import router from './routes/index';

// dotenv Configuration
dotenv.config();

// Constants
const port = process.env.PORT || 3000;

export type emailType = {
  email: string;
};

export const publicPath = path.join(__dirname, 'public');

const app = express();

// Express Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(router);
app.set('view engine', 'ejs');

// Mongoose Configuration
const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
  console.log('Connected to the mongod server.');
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start Server
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
