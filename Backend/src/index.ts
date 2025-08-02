import express from "express";
import userRouter from "./routes/user";
import courseRouter from "./routes/course";
import adminRouter from "./routes/admin";
import dotenv from "dotenv";
import mongoose from "mongoose";
import db from "./db"
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);


const main = async () => {
    await mongoose.connect(process.env.MONGODB_URI!);
    await db.userModel.deleteOne({
        email: "test@example.com"
    });
    app.listen(process.env.PORT);
    console.log("Server and database running");
}
main();

