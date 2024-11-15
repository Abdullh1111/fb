import express from "express"
import userRouter from "./model/user/user.router"
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/user",userRouter)

export default app