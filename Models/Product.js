import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    price: String,
    image: String,
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
