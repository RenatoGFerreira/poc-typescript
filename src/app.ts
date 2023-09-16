import express, {Response, Request, NextFunction} from "express"
import "express-async-errors"
import customerRouter from "./routes/customer.router"
import { ErrorHandler } from "./protocols/protocols"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(customerRouter)
app.use((err:ErrorHandler,req:Request,res:Response,next:NextFunction)=>{
    if(err.type === "Conflict"){
        return res.status(422).send(err.message)
    }
    if(err.type === "NotFound"){
        return res.status(404).send(err.message)
    }
    console.log(err)
    res.status(500).send("someting is worong cantact the developer :(")
})


const port: number = Number(process.env.PORT) || 5000
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})