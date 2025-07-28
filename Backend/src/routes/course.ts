import express,{Request,Response} from "express"
const courseRouter=express.Router();

courseRouter.get("preview",(req:Request,res:Response)=>{
    res.json({message:"Previewing the courses"});
})

courseRouter.post("purchase",(req:Request,res:Response)=>{
    res.json({message:"Purchasing the courses"});
})

export default courseRouter;