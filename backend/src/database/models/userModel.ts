import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: {type: String, require: true},
        password: {type: String, require: true},
        salt: {type: String}
    },
    {timestamps: true, collection: "Users"},
);

const UserModel = mongoose.model("Users",User);
export default UserModel;