import mongoose from "mongoose"

export const connect = mongoose.connect("mongodb://0.0.0.0:27017/tscrudapi")
.then(()=>console.log("connected to database"))
.catch((e:string)=>console.log(e))