import express,{Request,Response} from "express"
import adminMiddleware from "../middleware/admin";
import db from "../db";
const courseRouter=express.Router();

courseRouter.get("preview", adminMiddleware, async (req:Request,res:Response)=>{
    const userId=req.body.userId;
    const courseId=req.body.courseId

    await db.courseModel.create({
        userId,
        courseId
    })
    res.json({message:"Previewing all the courses"});
})

courseRouter.post("purchase", async (req:Request,res:Response)=>{
    const courses=await db.courseModel.find({});
    res.json({
        courses
    });
})

export default courseRouter;