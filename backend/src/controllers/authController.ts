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
                message: "User not created"
            })
        });
}

function updateUser(req: Request, res: Response){
    const body = req.body;
    
    if(!body){
        res.status(400).json({
            success: false,
            error: "No user provied to update"
        })
    }

    UserModel.findOne({email: req.params.email}, (err,user) =>{
        if(err){
            return res.status(400).json({error: err, message: "User not found"})
        }
        user.email = body.email;

        user
            .save()
            .then(() =>{
                return res.status(200).json({
                    success: true,
                    email: user.email,
                    message: "User email successfully updated"
                })
            })
            .catch(error =>{
                return res.status(404).json({error:error, message: "Failed to update user email"})
            })
    })
}

async function deleteUser(req: Request, res: Response){
    const body = req.body;

    if(!body){
        res.status(400).json({success:false, error: "No user provided to delete"});
    }

    await UserModel.findOneAndDelete({email: req.params.email}, (err,user) => {
        if(err){
            return res.status(400).json({success: false,error: err})
        }

        if(!user){
            return res.status(404).json({success:false, message: "User not found."});
        }

        return res.status(200).json({success:true, data:user});
    });
}

async function getUser(req: Request, res: Response){
    const body = req.body;

    if(!body){
        res.status(400).json({success: false, error: "No user provided to get"})
    }

    await UserModel.findOne({email: req.params.email}, (err, user) =>{
        if(err){
            return res.status(400).json({success: false, error: err});
        }

        if(!user){
            return res.status(404).json({success: false, error: "User not found to delete"});
        }

        return res.status(200).json({success: true, data: user});
    });
}

async function getUsers(req: Request, res: Response){
    await UserModel.find({}, (err,users) =>{
        if(err){
            return res.status(400).json({success:false, error: err});
        }

        if(!users.length){
            return res.status(404).json({success:false, error:"No user found to retrieve"});
        }

        return res.status(200).json({success:true, data: users});
    })
}

export default {createUser,updateUser, deleteUser, getUser, getUsers};