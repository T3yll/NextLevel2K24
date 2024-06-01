import mongoose from 'mongoose';

// Define the Buy schema
const buySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  bought_price: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Buy || mongoose.model('Buy', buySchema);
