import { user } from "./user.model";
import { TUser } from "./user.schema";

const createUser = async(payload:TUser)=>{
    console.log(payload);
    
    try{
        await user.create(payload)
    }catch(err){
        console.log(err);
    }
}
export default {
    createUser
}