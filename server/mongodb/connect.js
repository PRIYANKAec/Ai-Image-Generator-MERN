import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set(`strictQuery`, true); //for searchFunctionality

    mongoose.connect(url)
     .then(() => console.log("MongoDB connected"))
     .catch((err) => console.log(err)); //connecting database
} 

export default connectDB;