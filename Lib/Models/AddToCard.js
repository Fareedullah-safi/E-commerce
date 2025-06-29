<<<<<<< HEAD
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
=======
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
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
