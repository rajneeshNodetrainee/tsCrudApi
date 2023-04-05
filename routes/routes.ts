import express from "express"
import {get} from "../controller/get"
import {postData} from "../controller/postData"
import {readData} from "../controller/readData"
import {usersAll} from "../controller/usersAll"
import {deleteUser} from "../controller/deleteuser"
import {updateUser} from "../controller/updateuser"

export const router = express.Router()

router.get("/", get)

router.post("/post", postData)

router.get("/readData/:id", readData)

router.get("/usersAll", usersAll)

router.delete("/deleteUser/:id", deleteUser)

router.patch("/updateuser/:id", updateUser)