import mongoose,{model,Schema,connect} from "mongoose"

//1.create an interface representing a document

interface Iuser {
	name:string;
	email:string;
	password:string;
	phone:number;
	isActive:boolean
}

//2.Create a schema

const userSchema =new Schema<Iuser>({
	name:{
	type:String,
	required:true
	},

	email:{
	type:String,
	required:true,
	unique:true
	},

	password:{
	type:String,
	required:true
	},

	phone:{
	type:Number,
	required:true
	},
	isActive:{
	type:Boolean,
	default:true
	}

})

export const user = model<Iuser>('user', userSchema)