import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * userId will be the email of the user
 */
const Goal = new Schema(
    {
        userId : {type: String, require: true},
        goalTitle : {type: String, require: true},
        goalDescription : {type: String},
        deadline : {type: Date},
        progress : {type: Number},
        completed : {type: Boolean}
    },
    {collection: "Goals"}
);

export default mongoose.model("goals",Goal);