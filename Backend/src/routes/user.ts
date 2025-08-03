import express, { Request, Response } from "express";
import db from "../db"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userMiddleware from "../middleware/user";
dotenv.config();
const userRouter = express.Router();

userRouter.post("/signup", async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        await db.userModel.create({
            email,
            password,
            firstName,
            lastName
        })
        return res.status(201).json({ message: "Signup successful" });
    }
    catch (err) {
        console.error("Signup error:", err);
        return res.status(500).json({ message: "Signup failed", error: err });
    }
})

userRouter.post("/signin", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const jwtkey = process.env.JWT_USER_PASSWORD;
    try {
        const user = await db.userModel.findOne({
            email: email,
            password: password
        })
        if (!jwtkey) {
            throw new Error("JWT secret is not defined");
        }
        if (user) {
            const token = jwt.sign({ id: user._id }, jwtkey);
            res.json({
                token: token
            })
        } else {
            res.status(403).json({
                message: "Incorrect credentials"
            });
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Signin failed", error: err });
    }

})

userRouter.get("/purchase", userMiddleware, async (req: Request, res: Response) => {
    const userId=req.body.userId;
    const purchases=await db.purchaseModel.find({
        userId
    })
    res.json({ purchases });
})

export default userRouter;