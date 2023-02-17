import UserModel from "../database/models/userModel";
import type {Request, Response} from 'express';
import bcrypt from "bcrypt";

//Ads a user with an email and password
async function createUser(req: Request, res: Response){
    const body = req.body;

    //hashing password with a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    body.password = await bcrypt.hash(body.password,salt);
    body.salt = salt;

    const user = new UserModel(body); 
    if(!user){
        return res.status(400).json({success: false});
    }

    user
        .save()
        .then(()=>{
            return res.status(201).json({
                success:true,
                id: user._id
            })
        })
        .catch(error =>{
            return res.status(400).json({
                error: error,
                message: "Movie not created"
            })
        });
}

// function deleteUser(req: Request, res: Response){
    
// }

export default {createUser};