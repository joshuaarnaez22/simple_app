// userModel.js
import mongoose from "mongoose";

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
});

// Check if the model already exists before creating it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
