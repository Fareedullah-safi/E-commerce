import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
    userName: String,
    PhoneNumber: Number,
    PinCode: Number,
    StreetAdress: String,
    CityAdress: String,
    StateAdress: String,
    userId: String
})
export default mongoose.models.Adress || mongoose.model('Address', AddressSchema)