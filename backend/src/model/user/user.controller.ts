import { Request, Response } from "express";
import userService from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req);
    
    await userService.createUser(req.body);
    res.status(201).send({
      success: true,
      message: "User created successfully",
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};
export default {
    createUser
}
