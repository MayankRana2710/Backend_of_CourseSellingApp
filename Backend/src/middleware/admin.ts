import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
dotenv.config();
interface JwtPayload {
  id: string;
}
function adminMiddleware(req: Request, res: Response, next: NextFunction) {
    const jwtkey = process.env.JWT_ADMIN_PASSWORD;
    const token = req.headers.token;
    if (typeof token === "string" && typeof jwtkey !== "undefined") {
        const decoded = jwt.verify(token, jwtkey) as JwtPayload;
        if (decoded) {
            (req as any).userId=decoded.id;
            next();
        }
    }
    else {
        res.status(403).json({ message: "Invalid token, not signed in" });
    }
}

export default adminMiddleware;