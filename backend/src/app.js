import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/volunteer.routes.js";

const app = express();
app.use(cors());
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }),
);

//prevent too much data from being sent to server
app.use(
    express.json({
        limit: "16kb",
    }),
);

//handling data froms urls (UrlEncoders)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// serve any static files like images favicon in static
//public folder
app.use(express.static("public"));

//access client cookies
app.use(cookieParser());

// -----------------------ROUTES-----------------------
// Routes Declaration

// http://localhost:3000/api/v1/users/
app.use("/api/", userRouter);

export { app };
