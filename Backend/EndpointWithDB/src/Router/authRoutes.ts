import { Router } from "express";
import {
  Homepage,
  loginUser,
  RegisterUser,
  updateProfile,
} from "../Controller/authController";
import { VerifyToken } from "../Middlewares/VerifyToken";

const authrouter = Router();

authrouter.post("/register", RegisterUser);
authrouter.post("/login", loginUser);
authrouter.get("/home", VerifyToken, Homepage); //protected Route
authrouter.put("/update-profile", VerifyToken, updateProfile); //protected Route

export default authrouter;
