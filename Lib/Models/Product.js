import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    rating: Number,
    MarketPrice: Number,
    OurPrice: Number,
    imageUrl: String,
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
