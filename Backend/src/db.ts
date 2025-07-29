import mongoose from "mongoose";
import dotenv from "dotenv";
const ObjectId=mongoose.Types.ObjectId;
dotenv.config();



const userSchema=new mongoose.Schema({
    email:{type: String, unique:true},
    password:String,
    firstName: String,
    lastName: String
})

const courseSchema=new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageURL:String,
    courseId: ObjectId
})

const adminSchema=new mongoose.Schema({
    email:{type: String, unique:true},
    password:String,
    firstName: String,
    lastName: String
})

const purchaseSchema=new mongoose.Schema({
    courseId:ObjectId,
    userId:ObjectId
})


const userModel = mongoose.model("user",userSchema);
const courseModel = mongoose.model("course",courseSchema);
const adminModel = mongoose.model("admin",adminSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

export default {userModel, courseModel, adminModel, purchaseModel};