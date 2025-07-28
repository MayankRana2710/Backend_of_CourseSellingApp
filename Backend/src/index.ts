import express from "express";
import userRouter from "./routes/user";
import courseRouter from "./routes/course";
import adminRouter from "./routes/admin";
const app=express();

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

app.listen(3000);