import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
    desktop: {
        type: String,
        required: true
    },
    tablet: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
})

const dessertSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: imagesSchema,
        required: true
    }


});

export default mongoose.model("Dessert", dessertSchema);