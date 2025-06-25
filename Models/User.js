import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    userEmail: String,
    userPassword: String,
    JWT: String,
}, { timestamps: true }
)

export default mongoose.models.User || mongoose.model("User", userSchema)