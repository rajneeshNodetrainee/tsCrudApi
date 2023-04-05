import express,{Request,Response} from "express"
import {user} from "../database_models/user"
import _ from "lodash"

export const updateUser = async(req:Request, res:Response)=>{
	try{
	const _id = req.params.id
	if(_.isEmpty(req.body)){
	return res.status(404).json({error: "There is nothing to update"})
	}

	const result = await user.findById(_id)
	if(!result){
	return res.status(404).json({message:"User not found"})
	}

	if(result.isActive==false){
	return res.status(404).json({error:"User does not exist"})
	}else{

	const updatedUser = await user.findByIdAndUpdate(_id, req.body)
	return res.status(200).json({message: "User updated successfully"})

	}
	}catch(e:any){
	const errMsg:String = e.message;
	return res.status(404).json({error:errMsg})
	}	
}

