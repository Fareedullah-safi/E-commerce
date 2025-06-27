import mongoose from 'mongoose';


const AddToCard = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    rating: Number,
    MarketPrice: Number,
    OurPrice: Number,
    imageUrl: String,
}, { timestamps: true });

export default mongoose.models.AddToCard || mongoose.model('AddToCard', AddToCard);
