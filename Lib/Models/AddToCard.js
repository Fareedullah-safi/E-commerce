const mongoose = require('mongoose');

const AddToCardSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    MarketPrice: Number,
    OurPrice: Number,
    imageUrl: String,
    quantity: Number,
    userId: String,
}, { timestamps: true });

const AddToCard = mongoose.models.AddToCard || mongoose.model("AddToCard", AddToCardSchema);
export default AddToCard;
