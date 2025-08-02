import express, { Request, Response } from "express";
import db from "../db";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const adminRouter = express.Router();

adminRouter.post("/signup", async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        await db.adminModel.create({
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
});
adminRouter.post("/signin", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const jwtkey = process.env.JWT_ADMIN_PASSWORD;
    try {
        const admin = await db.adminModel.findOne({
            email: email,
            password: password
        })
        if (!jwtkey) {
            throw new Error("JWT secret is not defined");
        }
        if (admin) {
            const token = jwt.sign({ id: admin._id }, jwtkey);
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

adminRouter.post("/course", (req: Request, res: Response) => {
    res.json({ message: "Admin posting course" });
})

adminRouter.put("/course", (req: Request, res: Response) => {
    res.json({ message: "Admin signup" });
})

adminRouter.get("/course/bulk", (req: Request, res: Response) => {
    res.json({ message: "Admin signup" });
})

export default adminRouter