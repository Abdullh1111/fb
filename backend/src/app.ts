import express, { json } from "express"
import cors from "cors"
import userRouter from "./model/user/user.router"
const app = express()
app.use(json())
app.use(cors({
  origin:"https://fb-mocha-one.vercel.app",
  credentials:true
}))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/user",userRouter)

export default app