import app from "./app"
import config from "./config"
import dbconnection from "./db/db.connection"
const port = config.port || 4000
app.listen(port,async () => {
    console.log(`Example app listening on port ${port}`)
    await dbconnection()
  })