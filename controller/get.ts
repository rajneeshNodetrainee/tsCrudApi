import express, {Request, Response} from "express"

export const get = async(req:Request, res:Response)=>{
	res.status(200).send("hello from controller")
}
