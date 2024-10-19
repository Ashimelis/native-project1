import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: {
        type:string,
        require: true,
        unique: true
    },
    email: {
        type: string,
        require: true,
        unique: true
    },
    password: {
        type:string,
        require: true
    }
}, {timestamps:true});