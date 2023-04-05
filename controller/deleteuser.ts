import express,{Request,Response} from "express"
import {user} from "../database_models/user"

export const deleteUser = async(req:Request, res:Response)=>{
	try{
	const _id = req.params.id
	const result = await user.findById(_id)
	if(!result){
	return res.status(404).json({message:"User not found"})
	}

	if(result.isActive==false){
	return res.status(404).json({error:"User does not exist"})
	}else{

	const deletedUser = await user.findByIdAndUpdate(_id, {isActive:false})
	return res.status(200).json({message: "User deleted successfully"})

	}
	}catch(e:any){
	const errMsg:String = e.message;
	return res.status(404).json({error:errMsg})
	}	
}

