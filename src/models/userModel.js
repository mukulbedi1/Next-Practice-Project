import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

// Check if the model already exists, if not create it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
