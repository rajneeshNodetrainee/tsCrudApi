import express,{Request,Response} from "express"
import {user} from "../database_models/user"

export const usersAll = async(req:Request, res:Response)=>{
	try{
	
	const response = await user.find()
	if(!response){
	return res.status(404).json({message:"There is currently no User"})
	}
	    
    const result = await user.find({isActive :true})

    res.status(200).json({result})

	}catch(e:any){
	const errMsg:String = e.message;
	return res.status(404).json({error:errMsg})
	}	
}

