import express from "express";
import authController from "../controllers/authController";

const AuthRouter = express.Router()

AuthRouter.post('/signup', authController.createUser);

//example URL for put request: http://localhost:3000/api/profile/qq@gmail.com
AuthRouter.put('/profile/:email', authController.updateUser);

AuthRouter.delete('/profile/:email',authController.deleteUser);

AuthRouter.get('/user/:email', authController.getUser);
AuthRouter.get('/users', authController.getUsers)

export default AuthRouter;