import express,{Request,Response} from "express";
import adminModel from "../db";
const adminRouter=express.Router();

adminRouter.post("/signup",(req:Request,res:Response)=>{
    res.json({message:"Admin signup"});
})

adminRouter.post("/signin",(req:Request,res:Response)=>{
    res.json({message:"Admin signin"});
})

adminRouter.post("/course",(req:Request,res:Response)=>{
    res.json({message:"Admin posting course"});
})

adminRouter.put("/course",(req:Request,res:Response)=>{
    res.json({message:"Admin signup"});
})

adminRouter.get("/course/bulk",(req:Request,res:Response)=>{
    res.json({message:"Admin signup"});
})

export default adminRouter