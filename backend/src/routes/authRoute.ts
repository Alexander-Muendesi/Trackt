import express from "express";
import authController from "../controllers/authController";

const AuthRouter = express.Router()

AuthRouter.post('/signup', authController.createUser);

export default AuthRouter;