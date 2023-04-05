import express, {Application,Request, Response} from "express"
import {connect} from "./database_connection/mongodb"
import {router} from "./routes/routes"

const app:Application = express()
app.use(express.json())
app.use(router)

connect;

app.listen(3000, ()=>{
	console.log("Started listening on port 3000")
})