import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); 
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectdb from "./config/connectdb.js";

const app = express();
app.use(cors({
    credentials : true,
    origin: process.env.FRONTEND_URL
}))

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy : false
}));

const PORT = 3030 || process.env.PORT;

app.get("/" , (req , res , next) => {
    console.log("Server is running" + PORT);
})

connectdb().then(() => {
    app.listen(PORT , () => {
        console.log(`Server is running on PORT : http://localhost:${PORT}`);
    })
})