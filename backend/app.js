import express from 'express';
import cors from 'cors';
import session from 'express-session';
import RedisStore from 'connect-redis';
import redisClient from './src/db/redisClient.js';
import incidentRoutes from './src/routes/incident.routes.js';
import sessionRoutes from './src/routes/session.routes.js'; // <-- Import session routes
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Session middleware setup
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 86400000 } // 1 day
  })
);

// Connect your routes here
app.use('/api/incidents', incidentRoutes); // incidents API
app.use('/api/session', sessionRoutes);    // session API

export default app;