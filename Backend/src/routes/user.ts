import express,{Request,Response} from "express";
const userRouter = express.Router();

userRouter.post("/signup",(req:Request,res:Response)=>{
    res.json({message:"Signup"});
})

userRouter.post("/signin",(req:Request,res:Response)=>{
    res.json({message:"Signin"});
})

userRouter.get("/purchase",(req:Request,res:Response)=>{
    res.json({message:"Purchased Courses"});
})

export default userRouter;