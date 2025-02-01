import express from "express";
const app = express();

import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";

//routes import
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

import dotenv from "dotenv";
dotenv.config({});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5121"],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;


//api's

app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);

});