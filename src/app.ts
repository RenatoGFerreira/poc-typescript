import express, {Response, Request} from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())


const port: number = Number(process.env.PORT) || 5000


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})