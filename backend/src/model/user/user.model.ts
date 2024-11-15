import { model, Schema } from "mongoose";
import { TUser } from "./user.schema";

const userSchema =new Schema<TUser>({
    username: String,
    password: String,
})

export const user = model<TUser>("user",userSchema)