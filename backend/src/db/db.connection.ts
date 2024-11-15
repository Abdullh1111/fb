import config from "../config";
import mongoose from "mongoose";

dbconnection().catch(err => console.log(err));

async function dbconnection() {
  await mongoose.connect(config.db as string,{
    dbName:"facebook"
  });
  

}
export default dbconnection