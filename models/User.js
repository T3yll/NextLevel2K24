import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    prenom: { type: String, required: true },
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    dateNaissance: { type: Date, required: true },
    
    isAdmin: { type: Boolean, default: false },
    balance: { type: Number, default: 5000 },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
