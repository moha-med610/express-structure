// import necessary modules
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// import routes from routes folder

// import error handler from middleware folder
import notFound from './middlewares/notFound.middleware.js';
import globalError from './middlewares/globalError.middleware.js';

dotenv.config();

// initialize express app and set up middlewares
const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: "Too many requests. Please try again later."
});
const allowedOrigins = [
    process.env.CLIENT_URL
]

// use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(limiter);
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
app.use(cookieParser())

// set up routes


// set up error handler
app.use(notFound)
app.use(globalError);

export default app;