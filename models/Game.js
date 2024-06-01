import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    quantiteStock: { type: Number, required: true },
    codeActivation: { type: String, required: true },
    coverURL: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Game || mongoose.model('Game', gameSchema);
