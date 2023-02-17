import mongoose from "mongoose";

mongoose.set("strictQuery",false);

mongoose
    .connect("mongodb://127.0.0.1:27017/trackt")
    .catch(e => {
        console.log("Connection Error: ", e.message);
    });

const db = mongoose.connection;

export default db;