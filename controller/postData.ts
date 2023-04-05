import express,{Request,Response} from "express"
import {user} from "../database_models/user"
import validator from "validator"

export const postData = async(req:Request, res:Response)=>{
	try{
	const result = req.body;
	//console.log(req.body)

	if(!validator.isEmail(req.body.email)){
 		return res.status(422).json({error: "Invalid Email"})
 	}

	if(!result){
	return res.status(404).json({error:"Nothing found"})
	}
	else{
	const User = new user(result)
	const email = req.body.email
	const response = await user.findOne({email:email})
	if(response){
	return res.status(409).json({error:"Someone is using this email id"})
	}

	await User.save()
	return res.status(201).json({message:"user is created"})
	}

	}catch(e:any){
	const errMsg:String = e.message;
	return res.status(404).json({error:errMsg})
	}	
}
